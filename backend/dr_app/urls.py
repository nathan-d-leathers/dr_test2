from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name="index"),
    path('', views.send_the_homepage),
    path('activities/', views.get_activities),
    path('activities/<int:actId>', views.get_activity),
]
