from django.shortcuts import render, redirect
from account.models import *
from trainee.models import *
# Create your views here.

def list_accounts(request):
    context = {}
    context['accounts'] = Account.objects.all()
    return render(request, 'account/list.html', context)


def update_accounts(request, id):    
    context = {}
    context['trainees'] = Trainee.objects.all()
    account = Account.objects.get(pk=id)
    if request.method == "POST":
        for index, val in enumerate(request.POST):
            if index == len(request.POST) - 1 and request.POST.get(f'{val}'):
                trainee = Trainee.objects.get(pk=request.POST.get(f'{val}'))
                setattr(account, f'{val}', trainee)
            elif index != 0 and request.POST.get(f'{val}'):
                setattr(account, f'{val}', request.POST.get(f'{val}'))
        account.save()
        return redirect('list_accounts')
    return render(request, 'account/update.html', context)

def delete_accounts(request, id):  
    account = Account.objects.get(pk=id)
    account.delete()
    return redirect('list_accounts')


def create_accounts(request):
    context = {}
    context['trainees'] = Trainee.objects.all()
    if request.method == 'POST':
        account = Account()
        account.username = request.POST.get('username')
        account.password = request.POST.get('password')
        account.email = request.POST.get('input_email')
        account.traineeobj = Trainee.objects.get(pk=request.POST.get('traineeobj'))
        account.save()
        return redirect('list_accounts')
    return render(request, 'account/create.html', context)


def show_details(request, id):
    context = {}
    context['account'] = Account.objects.get(pk=id)
    return render(request, 'account/details.html', context)


from .register import Register

def register(request):
    context = {}
    user = Register()
    if request.method == 'POST':
        user = Register(request.POST)
        if user.is_valid():
            user.save()
            return redirect('login')
        else:
            print(user.errors)
    context['form'] = user
    return render(request, 'account/register.html', context)


from django.contrib.auth.forms import AuthenticationForm

def login(request):
    context = {}
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('Trainee:list_trainee')
    context['form'] = form
    return render(request, 'account/login.html', context)


            
