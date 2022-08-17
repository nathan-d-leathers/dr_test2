from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
import dotenv
from .models import Activity
from .models import AppUser as User
from rest_framework.decorators import api_view
import googlemaps
import requests
# from dotenv import load_dotenv
# import dotenv
# import os

# load_dotenv()
# secret_key = os.environ(yelpApiKey)
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


# @api_view('GET')
# def googleapi(request):
#     # url has google api search, location based off of Code Platoon HQ, Radius 3000 Meters,Type=Rersturants, and API Key
#     url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.879930%-87.630710&radius=3000&type=restaurant&key=AIzaSyDJoyNs_BRc2WOkSw9gmxvbGC-B_P2CWlY"
#     payload = {}
#     headers = {}
#     response = requests.request("GET", url, headers=headers, data=payload)
#     data = response.json()
#     print(data)
#     return HttpResponse(data['results'])

# , 'POST'
@api_view(['GET'])
def yelpAPI(request, activity):
    print("Activity is now in the backend", activity)
    # i can add variables using f" this is a {vairable_name}!"
    base_url = "https://api.yelp.com/v3/businesses/search?"
    # search_params = {
    #     'term': 'coffee',
    #     'latitude': '41.879930',
    #     'longitude': '-87.630710',
    #     'radius': '5000',
    #     'sort_on': 'popularity',
    #     'limit': '20'
    # }
    # can add mutliple terms by adding "coffee+tea" spaces are ok
    # keyword = "movie theater + coffee"

    search = f"term={activity}&latitude=41.879930&longitude=-87.630710&radius=40000&sort_on=popularity&limit=20"

    url = base_url + search

    results = {}
    headers = {
        'Authorization': 'Bearer %s' % YELP_API_KEY
    }
    response = requests.request("GET", url, headers=headers, data=results)
    # print(response.text)
    data = response.text
    return HttpResponse([data])
