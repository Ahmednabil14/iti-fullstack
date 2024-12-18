"""
URL configuration for ITIAN project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from account import views
from django.contrib.auth.views import LoginView
from rest_framework.routers import DefaultRouter
from trainee.api.views import TraineeViewSet

router = DefaultRouter()
router.register(r'Api/Trainee', TraineeViewSet, basename='trainee')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Acounts/', include('account.urls')),
    path('Track/', include('track.urls')),
    path('Trainee/', include('trainee.urls')),
    path('Register/', views.register, name ='register'),
    path('Login/', LoginView.as_view(template_name='account/login.html'), name='login'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + router.urls


