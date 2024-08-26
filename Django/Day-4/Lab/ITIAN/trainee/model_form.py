from django import forms
from .models import Trainee, Track

class NewTraineModelForm(forms.ModelForm):
    track = forms.ChoiceField(choices=Track.get_tuple_of_tracks())
    class Meta:
        model = Trainee
        fields = '__all__'
        exclude = ['trackobj']
