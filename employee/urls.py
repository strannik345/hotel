from django.urls import path, include

from . import views

urlpatterns = [
	path('', views.employeeFormView.as_view(), name = 'index'),	
	path('list', views.employeeListView.as_view(), name = 'index'),	
	path('thanks', views.thanks, name = 'index'),	
	
]