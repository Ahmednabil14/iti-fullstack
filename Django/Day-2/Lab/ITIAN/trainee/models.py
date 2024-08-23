from django.db import models
from track.models import *

# Create your models here.

class Trainee(models.Model):
    trainee_id = models.AutoField(primary_key=True)
    first_name = models.CharField()
    last_name = models.CharField()
    gender = models.CharField(max_length=10, null=True)
    birth_data = models.DateField(null=True)
    address = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=11, null=True)
    email = models.EmailField(max_length=100, null=True)
    trackobj = models.ForeignKey("track.Track", on_delete=models.CASCADE)
