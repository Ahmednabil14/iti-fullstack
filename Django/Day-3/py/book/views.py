from lib2to3.fixes.fix_input import context

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
    context={}
    context['authors']=Author.objects.all()
    context['book']=Book.objects.get(pk=id)
    if(request.method=='POST'):
        #validation server side
        #update
        # b=Book.objects.filter(pk=id)
        # b.name=request.POST['bookname']
        # b.version = request.POST['bookversion']
        # b.authorobj=Author.objects.get(pk=request.POST['bookauthorid'])
        # b.save()
        Book.objects.filter(pk=id).update(name=request.POST['bookname'],
                                          version=request.POST['bookversion'],
                                          authorobj=Author.objects.get(pk=request.POST['bookauthorid']))


    return render(request,'book/update.html',context)
def book_delete(request,id):
    context={}
    try:
        Book.objects.filter(pk=id).delete()
        context['msg']='book deleted'
        # context['books']=Book.objects.all()
        return  redirect('book_list')
    except:
        import sys
        context['error'] =sys.exc_info()[1]
    return render(request,'book/delete.html',context)
    # print(request)
    # print(id,type(id))
    # return  HttpResponse(f'<h1>Delete book number {id}</h1>')

def book_create(req):
    context={}
    context['authors']=Author.objects.all()
    if(req.method=='POST'):
        # # validation on server side
        if(len(req.POST['bookname'])>0 and len(req.POST['bookname'])<=200):
            Book.create( req.POST['bookname'],
                         req.POST['bookversion'],
                         req.FILES['bookimage'],
                         req.POST['bookauthorid'])
            # # return  HttpResponseRedirect('http://127.0.0.1:9000/Books/')
            # return redirect('book_list')
        else:
            context['error']='invalid name'

    return render(req,'book/add.html',context)
    # print(req.FILES)
    # response=HttpResponse('<h1>cretae book</h1>')
    # response.write('[;a[a;[;a')
    # response['content-type']='text/plain'
    # return response
from .forms import *
def book_create_from(request,id):
    context={}
    # publish book old data
    form=NewBook()
    context['form']=form
    print('okok',request.method)
    if(request.method=='POST'):
        #publish data user enter in object from (newbook)
        form=NewBook(request.POST)
        if(form.is_valid()):
            #copy data accurate form cleand data
           #create objet from book
           #save object
          Book.create(form.cleaned_data['name'],form.cleaned_data['version'],
                      form.cleaned_data['image'],form.cleaned_data['author'])
        else:
            print(form.errors)
            context['error']=form.errors
    return render(request,'book/addform.html',context)