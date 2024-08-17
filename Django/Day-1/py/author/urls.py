from django.urls import path
from .views import *
urlpatterns=[
    path('',author_list,name='author_list'),
    path('Add/',author_create,name='author_create'),
    path('Update/<int:id>',author_update,name='author_update'),
    path('Delete/<int:id>',author_delete,name='author_delete')

]