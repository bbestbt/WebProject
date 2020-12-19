from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet,ItemListView,AddToCartView,HotelListView,FoodListView


router=routers.DefaultRouter()
router.register('users',UserViewSet)
urlpatterns = [
    path('',include(router.urls) ),
    path('attrack-ticket/',ItemListView.as_view(),name='attrack-ticket'),
    path('hotel-ticket/',HotelListView.as_view(),name='hotel-ticket'),
    path('food-ticket/',FoodListView.as_view(),name='food-ticket'),
    path('add-to-cart/',AddToCartView.as_view(),name='add-to-cart')
]
