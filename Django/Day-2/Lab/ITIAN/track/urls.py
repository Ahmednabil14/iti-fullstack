from django.urls import path
from .views import list_track, update_track, delete_track, create_track, show_details

urlpatterns = [
    path('', list_track, name='list_track'),
    path('update/<int:id>/', update_track, name='update_track'),
    path('delete/<int:id>/', delete_track, name='delete_track'),
    path('create/', create_track, name='create_track'),
    path('details/<int:id>/', view=show_details, name='show_details_track')
]