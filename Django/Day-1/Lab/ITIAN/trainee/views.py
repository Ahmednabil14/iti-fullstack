from django.shortcuts import render

# Create your views here.

def list_trainee(request):
    context = {}
    trainee_list = [{"id": 1, "name": "ahmed", "track": "python"},
                    {"id": 2, "name": "nabil", "track": "php"}]
    context['trainee_list'] = trainee_list
    print(context)
    return render(request, 'trainee/list.html', context)


def update_trainee(request, id):    
    return render(request, 'trainee/update.html', {'id': id})

def delete_trainee(request, id):    
    return render(request, 'trainee/delete.html', {'id': id})


def create_trainee(request):
    return render(request, 'trainee/create.html')


def show_details(request, id):
    context = {}
    context['id'] = id
    return render(request, 'trainee/details.html', context)
