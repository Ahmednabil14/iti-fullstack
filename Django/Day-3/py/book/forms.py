# from django.forms import Form
from django import forms
from author.models import Author
#validate client & server side &html
class NewBook(forms.Form):
    name=forms.CharField(required=True,max_length=5)
    version=forms.IntegerField(required=True,label='Book Version')
    imge=forms.ImageField(required=False,label='Upload Book Image')
    author=forms.ChoiceField(choices=Author.getall())
