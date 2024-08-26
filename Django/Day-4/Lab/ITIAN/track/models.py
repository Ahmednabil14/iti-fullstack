from django.db import models

# Create your models here.

class Track(models.Model):
    id = models.AutoField(primary_key=True)
    track_name = models.CharField(max_length=255)

    @classmethod
    def get_tuple_of_tracks(cls):
        return [(t.id, t.track_name) for t in cls.objects.all()]