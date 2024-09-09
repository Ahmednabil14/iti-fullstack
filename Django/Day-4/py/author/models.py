#db
from django.db import models

# Create your models here.
class Author(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    @classmethod
    def getall(cls):
        # object of xquery
        return [(auth.id,auth.name) for auth in cls.objects.all()]