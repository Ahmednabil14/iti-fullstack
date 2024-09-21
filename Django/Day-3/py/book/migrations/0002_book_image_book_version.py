# Generated by Django 4.2.15 on 2024-08-18 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='image',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='book',
            name='version',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]