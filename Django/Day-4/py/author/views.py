#controller
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
# Create your views here.
@login_required()
def author_list(request):
    author=[]
    auth1={'id':1,'name':'aya'}
    auth2={'id':2,'name':'ali'}
    author.append(auth1)
    author.append(auth2)
    context={}
    context['authors']=author
    return render(request,'author/list.html',context)
    # return  HttpResponse('<h1>list author</h1>')
def author_create(request):
    return  HttpResponse('<h1>create author</h1>')
# @csrf_exempt()
def author_update(request,id):
    # return  HttpResponse('<h1>update author</h1>')
    context={'id':id}
    return render(request, 'author/update.html', context)
def author_delete(request,id):
    # return  HttpResponse('<h1>Delete author</h1>')
    context = {'id': id}
    return render(request, 'author/delete.html', context)
def author_show(request,id):
    # return  HttpResponse('<h1>Delete author</h1>')
    context = {'id': id}
    return render(request, 'author/show.html', context)