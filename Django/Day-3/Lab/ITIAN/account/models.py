from django.db import models

# Create your models here.

class Account(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    traineeobj = models.ForeignKey("trainee.Trainee", on_delete=models.CASCADE)
