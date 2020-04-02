from django.core.mail import send_mail

from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets 

from .models import Articulo
from .serializer import ArticuloSerializer

# Create your views here.

class ArticuloViewSet(viewsets.ModelViewSet): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 


    