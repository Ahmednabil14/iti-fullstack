from rest_framework import viewsets
from ..models import Trainee
from .serializers import TraineeSerializer

class TraineeViewSet(viewsets.ModelViewSet):
    queryset = Trainee.objects.all()
    serializer_class = TraineeSerializer