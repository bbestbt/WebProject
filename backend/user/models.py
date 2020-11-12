from django.db import models

# Create your models here.
class User(models.Model):
    username=models.CharField(max_length=20,unique=True)
    firstname=models.TextField(max_length=20)
    lastname=models.TextField(max_length=20)
    password=models.CharField(max_length=15)
    confirmPassword=models.CharField(max_length=15)

    def __str__(self):
        return self.username
      