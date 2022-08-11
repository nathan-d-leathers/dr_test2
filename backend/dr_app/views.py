from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import Activity
from rest_framework.decorators import api_view

# Create your views here.

# USED FOR CONNECTION TESTING
# def index(request):
#     return HttpResponse('Hello World')


def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


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
