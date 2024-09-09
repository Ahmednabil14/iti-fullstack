from django.shortcuts import render, HttpResponseRedirect,redirect
from django.http import HttpResponse
from .models import *
from author.models import *

from author.models import Author


# Create your views here.
#function--->view
#arg--->httprequest
#return --->httpresoinse
def book_show(request,id):
    # return  HttpResponse('<h1>show book</h1>')
    # context={}
    # book=Book.objects.get(pk=id)
    # context['book']=book
    context={'book':Book.objects.get(pk=id)}
    return render(request,'book/show.html',context)
def book_list(request):
    context={}
    books=Book.objects.all()
    context['books']=books
    return render(request,'book/list.html',context)
    # return  HttpResponse('<h1>list book</h1>')
def book_update(request,id):
    print(request)
    print(id,type(id))
    return  HttpResponse(f'<h1>update book number {id}</h1>')
def book_delete(request,id):
    print(request)
    print(id,type(id))
    return  HttpResponse(f'<h1>Delete book number {id}</h1>')

def book_create(req):
    context={}
    context['authors']=Author.objects.all()
    if(req.method=='POST'):
        context={}
        # # validation on server side
        if(len(req.POST['bookname'])>0 and len(req.POST['bookname'])<=200):
            bookobj=Book()
            bookobj.name=req.POST['bookname']
            bookobj.version=req.POST['bookversion']
            bookobj.authorobj=Author.objects.get(pk=req.POST['bookauthorid'])
            bookobj.save()
            # return  HttpResponseRedirect('http://127.0.0.1:9000/Books/')
            return redirect('book:book_list')
        else:
            context['error']='invalid name'
    return render(req,'book/add.html',context)
    # print(req.FILES)
    # response=HttpResponse('<h1>cretae book</h1>')
    # response.write('[;a[a;[;a')
    # response['content-type']='text/plain'
    # return response