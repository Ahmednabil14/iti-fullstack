"""
URL configuration for libary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

#url--->view function(views.py)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('Books/',include('book.urls')),
    path('Authors/',include('author.urls')),
    # path('', login),
    # path('Logout/', logout),
    # path('Register/', register),


]
#uuid--->
#slug=ascii,lettwe,number
#str=letter,number
#path--->r-path ---->float