from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def list_trainee(request):
    context = {}

    context['trainee_list'] = Trainee.objects.all()
    return render(request, 'trainee/list.html', context)


def update_trainee(request, id):    
    context = {}
    context['tracks'] = Track.objects.all()
    trainee = Trainee.objects.get(pk=id)
    if request.method == 'POST':
        for index, val in enumerate(request.POST):
            if index != 0 and index != len(request.POST) - 1 and request.POST.get(f'{val}'):
                setattr(trainee, f'{val}', request.POST.get(f'{val}'))
            elif index == len(request.POST) - 1 and request.POST.get(f'{val}'):
                track = Track.objects.get(pk=request.POST.get(f'{val}'))
                trainee.trackobj = track
        trainee.save()
        return redirect('list_trainee')
    return render(request, 'trainee/update.html', context)

def delete_trainee(request, id):   
    trainee = Trainee.objects.get(pk=id)
    trainee.delete()
    return redirect('list_trainee')


def create_trainee(request):
    context = {}
    context['tracks'] = Track.objects.all()
    if request.method == 'POST':
        trainee = Trainee()
        trainee.first_name = request.POST.get('first_name')
        trainee.last_name = request.POST.get('last_name')
        trainee.gender = request.POST.get('gender')
        trainee.birth_data = request.POST.get('birth_date')
        trainee.address = request.POST.get('address')
        trainee.phone = request.POST.get('phone')
        trainee.email = request.POST.get('email')
        trainee.trackobj = Track.objects.get(id=request.POST.get('trackobj'))
        trainee.save()
        return redirect('list_trainee')
    return render(request, 'trainee/create.html', context)


def show_details(request, id):
    context = {}
    context['trainee'] = Trainee.objects.get(pk=id)
    return render(request, 'trainee/details.html', context)

from .forms import NewTrainee

def create_trainee_form(request):
    context = {}
    form = NewTrainee()
    context['form'] = form
    if request.method == 'POST':
        form = NewTrainee(request.POST, request.FILES)
        if form.is_valid():
            Trainee.objects.create(
            first_name=form.cleaned_data['first_name'],
            image=form.cleaned_data['image'],
            last_name=form.cleaned_data['last_name'],
            gender=form.cleaned_data['gender'],
            birth_data=form.cleaned_data['birth_date'],
            address=form.cleaned_data['address'],
            phone=form.cleaned_data['phone'],
            email=form.cleaned_data['email'],
            trackobj=Track.objects.get(pk=form.cleaned_data['track'])
            )
            return redirect('list_trainee')
        else:
            print(form.errors)
    
    return render(request, 'trainee/create_form.html', context)