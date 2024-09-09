from lib2to3.fixes.fix_input import context

from django.shortcuts import render,redirect
from .forms import *
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login,authenticate,logout
def login(request):
    form=AuthenticationForm()
    context={'form':form}
    if(request.method=='POST'):
        print(request.POST  )
        # userobj=User.objects.filter(username=request.POST['username'],password=request.POST['password']).first()
        userobj=authenticate(username=request.POST['username'],password=request.POST['password'])
        print(userobj)
        if((userobj) is not None ):
            #login pages mine not in admin
            #login into admin portal

            login(request)
            return redirect(request,'book_list')
        else:
            print('invalid user name or password')
    return render(request,'accounts/login.html',context)
# Create your views here.
def register(request):
    if(request.method=='POST'):
        form=UserRegistrationForm2(request.POST)
        if(form.is_valid()):
            User.objects.create()
            # form.cleaned_data['user']
            return redirect('login')
    else:
        form = UserRegistrationForm2()
        return render(request,'accounts/register,html',{'form':form})