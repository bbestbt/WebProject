from django.db import models
from django.conf import settings
# Create your models here.

# attract
class Item(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    slug = models.SlugField()
    image = models.ImageField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("core:product", kwargs={
            'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("core:add-to-cart", kwargs={
            'slug': self.slug
        })

    def get_remove_from_cart_url(self):
        return reverse("core:remove-from-cart", kwargs={
            'slug': self.slug
        })

class OrderItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"

    def get_total_item_price(self):
        return self.quantity * self.item.price

# Hotel
class Hotel(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    slug = models.SlugField()
    # description = models.TextField()
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    image = models.ImageField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("core:product", kwargs={
            'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("core:add-to-cart", kwargs={
            'slug': self.slug
        })

    def get_remove_from_cart_url(self):
        return reverse("core:remove-from-cart", kwargs={
            'slug': self.slug
        })

# Food
class Food(models.Model):
    title = models.CharField(max_length=100)
    promo = models.CharField(max_length=100)
    price = models.FloatField()
    slug = models.SlugField()
    image = models.ImageField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("core:product", kwargs={
            'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("core:add-to-cart", kwargs={
            'slug': self.slug
        })

    def get_remove_from_cart_url(self):
        return reverse("core:remove-from-cart", kwargs={
            'slug': self.slug
        })

class Cart(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    qty = models.CharField(max_length=100)

    def __str__(self):
        return self.title

