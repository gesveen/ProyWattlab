from django.shortcuts import render
from rest_framework.generics import ListAPIView
from django.http import HttpResponse

from .models import Articulo
from .serializer import ArticuloSerializer


# Create your views here.

def index(request):
    return HttpResponse("Index")

class ArticuloListView(ListAPIView):
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 

