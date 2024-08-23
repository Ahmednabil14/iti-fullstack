from django import forms
from track.models import *

class NewTrainee(forms.Form):
    first_name = forms.CharField()
    last_name = forms.CharField()
    image = forms.ImageField()
    gender = forms.ChoiceField(choices=[('male', 'Male'), ('female', 'Female')])
    birth_date = forms.DateField()
    address = forms.CharField()
    phone = forms.IntegerField()
    email = forms.EmailField()
    track = forms.ChoiceField(choices=Track.get_tuple_of_tracks())
