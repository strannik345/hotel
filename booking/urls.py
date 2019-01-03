from django.urls import path, include

from . import views

urlpatterns = [
	path('', views.BookingPageView.as_view(), name = 'index'),	
	path('check_in', views.check_in,),
	path('clientsList', views.clientsView.as_view()),
]