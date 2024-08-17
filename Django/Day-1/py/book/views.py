from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#function--->view
#arg--->httprequest
#return --->httpresoinse
def book_list(request):
    print(request)
    return render(request,'book/list.html')
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
    print(req.FILES)
    response=HttpResponse('<h1>cretae book</h1>')
    response.write('[;a[a;[;a')
    response['content-type']='text/plain'
    return response