from django.urls import path, include
from .views import RegisterUser, ListUser
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('register', RegisterUser.as_view()),
    path('listUser', ListUser.as_view()),
]
