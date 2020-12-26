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
from .models import Item,OrderItem,Hotel,Food
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
    queryset=User.objects.all()
    serializer_class=CartSerializer

    