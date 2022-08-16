from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name="index"),
    path('', views.send_the_homepage),
    path('signup/', views.sign_up),
    path('login/', views.log_in),
    path('logout/', views.log_out),
    path('whoami/', views.who_am_i),
    path('activities/', views.get_activities),
    path('activities/<int:actId>', views.get_activity),
    # path('googleapi', views.googleapi),
    path('yelpAPI/', views.yelpAPI)
]
