from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from .serializers import UserSerializer,ItemSerializer,HotelSerializer,FoodSerializer,CartSerializer
from rest_framework.generics import ListAPIView
from .models import Item,Hotel,Food,Cart
from django.utils import timezone

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer

class ItemListView(ListAPIView):
    permission_classes=(AllowAny,)
    serializer_class=ItemSerializer
    queryset=Item.objects.all()

class HotelListView(ListAPIView):
    permission_classes=(AllowAny,)
    serializer_class=HotelSerializer
    queryset=Hotel.objects.all()

class FoodListView(ListAPIView):
    permission_classes=(AllowAny,)
    serializer_class=FoodSerializer
    queryset=Food.objects.all()


class AddToCartView(viewsets.ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer

    def create(self, request, *args, **kwargs):        
        serializer = self.get_serializer(data=request.data)        
        serializer.is_valid(raise_exception=True)

        # Here all incoming data we kept in serializer variable.
        # Change the data in your way and then pass it inside perform_create()

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
           data={
            #    "status": 201,
               "message": "Product Successfully Created",                
               "data": serializer.data,                
               },
            #    status=status.HTTP_201_CREATED,
               headers=headers
           )

    