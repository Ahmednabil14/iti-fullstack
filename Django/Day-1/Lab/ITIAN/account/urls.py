from django.urls import path
from .views import list_accounts, update_accounts, delete_accounts, create_accounts, show_details

urlpatterns = [
    path('', list_accounts, name='list_accounts'),
    path('update/<int:id>/', update_accounts, name='update_accounts'),
    path('delete/<int:id>/', delete_accounts, name='delete_accounts'),
    path('create/', create_accounts, name='create_accounts'),
    path('details/', show_details, name='show_details')
]
