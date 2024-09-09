from ..models import *
from rest_framework.response import  Response
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework import status
#get method decortor
@api_view(['GET'])
def getbookdetails(request,id):
    #query model get book object id=id
    book=Book.objects.get(pk=id)
    bookjsonobj=Bookserlizer(book)#object of serlizer--->data-->json
    return Response(data=bookjsonobj.data)# ,status=status.HTTP_201_CREATED)
#
@api_view(['GET'])
def list(request):
    #get book from model
    books=Book.objects.all()
    objectsjson=Bookserlizer(books,many=True)
    return Response(data=objectsjson.data)
#
@api_view(['POST'])
def bookadd(request):
    book=Bookserlizer(data=request.data)
    if(book.is_valid()):
        Book.create(Book,book.name,book.version,None,1)
        return Response(data={'msg','book addeed'},status=status.HTTP_201_CREATED)
    else:
        return Response(data={'msg', book.errors})
@api_view(['PUT'])
def bookupdate(request,id):

    #get book to be updated
    booktobeupdate=Book.objects.get(pk=id)
    jsondata=request.data
    bookserlizerobj=Bookserlizer(instance=booktobeupdate,data=jsondata)
    if(bookserlizerobj.is_valid()):
        bookserlizerobj.save()
        return Response(data={'msg', f'book update {id}'},status=203)
    else:
        return Response(data={'msg', bookserlizerobj.errors})
@api_view(['Delete'])
def bookdelete(request,id):
     Book.objects.filter(pk=id).delete()

#
#
@api_view(['Delete','PUT','POST','GET'])
def test(request,id=None):
    if(request.method=='GET' and id ==None):
        # code list books
        pass
    elif (request.method == 'GET' and id is not None):
        # code list book details
        pass
    elif (request.method == 'post' and id is None):
        # code book creat
        pass