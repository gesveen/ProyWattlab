
from .serializer import RegisterSerializer, UserSerializer
from rest_framework import status, generics
from rest_framework.response import Response
from knox.models import AuthToken

from django.contrib.auth.models import User

#Registrar usuarios
class RegisterUser(generics.CreateAPIView): 
    def post(self, request): 
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(): 
            user= serializer.save() 
            
            token= AuthToken.objects.create(user)
            print(token[1])
            return Response({"user": UserSerializer(user).data}, status= status.HTTP_201_CREATED )
        else: 
            return Response("FALLA")
        
#Listar usuarios
class ListUser(generics.ListAPIView): 
    queryset = User.objects.all()
    serializer_class = UserSerializer    
            