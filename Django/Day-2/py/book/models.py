from django.db import models
from author.models import *
# Create your models here.
#class book as model
class Book(models.Model):
    #int col automincremny primary ke
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200,null=False)
    # publishdate=models.DateTimeField(auto_now_add=True)
    # updatedate=models.DateTimeField(auto_now=True)
    image=models.CharField(max_length=200,null=True)
    version=models.IntegerField()
    #add fk authobj inside frofromdjango object from author model
    #fk inside db intager value its value appear in author
    #makemigraiotn
    authorobj=models.ForeignKey("author.Author",on_delete=models.CASCADE )



