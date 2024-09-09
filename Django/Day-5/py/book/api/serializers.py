from rest_framework import serializers
class Bookserlizer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200, allow_null=False)
    # image = serializers.ImageField( allow_blank=True, allow_null=True)
    version = serializers.IntegerField()
