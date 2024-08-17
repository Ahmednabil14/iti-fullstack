from django.shortcuts import render

# Create your views here.

def list_accounts(request):
    return render(request, 'account/list.html')


def update_accounts(request, id):    
    return render(request, 'account/update.html', {'id': id})

def delete_accounts(request, id):    
    return render(request, 'account/delete.html', {'id': id})


def create_accounts(request):
    return render(request, 'account/create.html')


def show_details(request):
    return render(request, 'account/details.html')
