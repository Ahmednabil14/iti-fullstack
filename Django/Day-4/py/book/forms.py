# from django.forms import Form
from django import forms
from .models import *
from author.models import Author
#validate client & server side &html
class NewBook(forms.Form):
    # widget set css control
    # styled={'class':'','style':''}
    name=forms.CharField(required=True,max_length=5,widget=forms.TextInput(attrs={'class':'','color':''}))
    version=forms.IntegerField(required=True,label='Book Version')
    imge=forms.ImageField(required=False,label='Upload Book Image')
    author=forms.ChoiceField(choices=Author.getall())

class NewbookModel(forms.ModelForm):
    author = forms.ChoiceField(choices=Author.getall())
    class Meta:
        model=Book
        fields='__all__'
        exclude=['authorobj']