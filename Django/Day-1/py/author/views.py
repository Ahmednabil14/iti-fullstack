#controller
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
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
def author_update(request,id):
    return  HttpResponse('<h1>update author</h1>')
def author_delete(request,id):
    return  HttpResponse('<h1>Delete author</h1>')