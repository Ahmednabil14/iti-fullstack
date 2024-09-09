from django.db import models
from author.models import *
from django.urls import reverse
from django.shortcuts import redirect

# Create your models here.
#class book as model

class Book(models.Model):
    #int col automincremny primary ke
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200,null=False)
    image=models.ImageField(upload_to='book/images/',blank=True,null=True)
    version=models.IntegerField()
    #add fk authobj inside frofromdjango object from author model
    #fk inside db intager value its value appear in author--->int
    #makemigraiotn,
    authorobj=models.ForeignKey("author.Author",on_delete=models.CASCADE )
    @staticmethod
    def get_list_url():#it depend object
        return reverse('book_list')
    @classmethod
    def deletbook(cls,id):#depend on object
        cls.objects.filter(pk=id).delete()
        cls.get_list_url()
    def getimage(self):
        return f'/media/{self.image}'
    # def updatebook(self,name,version,image,authorid):
    #
    #     self.name=name
    #     self.save()
    @classmethod
    def create(cls,name,version,image,authid):
        bookobj = Book()
        bookobj.name = name
        bookobj.version =version
        bookobj.authorobj = Author.objects.get(pk=authid)
        # store image name in db
        bookobj.image = image
        bookobj.save()
        return redirect(       cls.get_list_url())
    def validatename(self,name):
       pass

