# Generated by Django 3.1 on 2020-12-25 18:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listanimal', '0006_auto_20201216_1337'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='animalinfo',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='animalnews',
            name='comment',
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
