from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Item,Hotel,Food,Cart
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password']
        extra_kwargs={'password':{'write_only':True, 'required':True}}

    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = [
            'id',
            'title',
            'price',
            'slug',
            'image'
        ]

class HotelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hotel
        fields = [
            'id',
            'title',
            'price',
            'slug',
            # 'description',
            'address',
            'phone',
            'website',
            'image'
        ]

class FoodSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Food
        fields = [
            'id',
            'title',
            'promo',
            'price',
            'slug',
            'image'
        ]

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = [
            'id',
            'title',
            'price',
            'qty',
        ]