from django.shortcuts import render

# Create your views here.

def list_track(request):
    return render(request, 'track/list.html')


def update_track(request, id):    
    return render(request, 'track/update.html', {'id': id})

def delete_track(request, id):    
    return render(request, 'track/delete.html', {'id': id})


def create_track(request):
    return render(request, 'track/create.html')


def show_details(request):
    return render(request, 'track/details.html')
