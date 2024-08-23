from django.urls import path
from .views import list_trainee, update_trainee, delete_trainee, create_trainee, show_details, create_trainee_form

urlpatterns = [
    path('', list_trainee, name='list_trainee'),
    path('update/<int:id>/', update_trainee, name='update_trainee'),
    path('delete/<int:id>/', delete_trainee, name='delete_trainee'),
    path('create/', create_trainee, name='create_trainee'),
    path('create_form/', create_trainee_form, name='create_trainee_form'),
    path('details/<int:id>', show_details, name='show_details')
]