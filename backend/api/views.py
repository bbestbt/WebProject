from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from .serializers import UserSerializer,ItemSerializer,HotelSerializer,FoodSerializer
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


class AddToCartView(APIView):
    def post(self, request, *args, **kwangs):
        slug = request.data.get('slug', None)
        if slug is None:
            return Response({"message": "Invalid request"}, status=HTTP_400_BAD_REQUEST)
        item = get_object_or_404(Item, slug=slug)
        order_item, created = OrderItem.objects.get_or_create(
            item=item,
            user=request.user,
            ordered=False
        )
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            # check if the order item is in the order
            if order.items.filter(item__slug=item.slug).exists():
                order_item.quantity += 1
                order_item.save()
                return Response(status=HTTP_200_OK)
            else:
                order.items.add(order_item)
                return Response(status=HTTP_200_OK)
        else:
            ordered_date = timezone.now()
            order = Order.objects.create(
                user=request.user, ordered_date=ordered_date)
            order.items.add(order_item)
            return Response(status=HTTP_200_OK)
