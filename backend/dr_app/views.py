from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from .models import Activity
from .models import AppUser as User
from rest_framework.decorators import api_view


# Create your views here.

# USED FOR CONNECTION TESTING
# def index(request):
#     return HttpResponse('Hello World')


def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

# -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# user functions


@api_view(['POST'])
def sign_up(request):
    try:
        User.objects.create_user(
            username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('Hello User')


@api_view(['POST'])
def log_in(request):
    print(dir(request))
    print(dir(request._request))

    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                print('except')
                print(str(e))
            return HttpResponse('success!')
            # Redirect to a success page.
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.


@api_view(['POST'])
def log_out(request):
    logout(request)
    return JsonResponse({'success': True})


@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize(
            "json", [request.user], fields=['email', 'username'])

        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})

# -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# activity functions


@api_view(['GET'])
def get_activities(request):
    activities = Activity.objects.all()
    data = serializers.serialize("json", activities, fields=[
                                 'name', 'description', 'keywords'])
    # print(data) prints full json database to console
    return HttpResponse(data)


@api_view(['GET'])
def get_activity(request, actId):
    activity = Activity.objects.get(id=actId)
    data = serializers.serialize("json", [activity])
    # print(data) prints specific activity object to console
    return HttpResponse(data)

# -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# date journal CRUD functions

# @api_view(['GET','POST','PUT','DELETE'])
#   def date_entry(request):
    # if request.method == 'PUT':
    # do something
    # return render()
    # elif method == 'POST':
    # do something else
    # etc ....
