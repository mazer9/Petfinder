# Generated by Django 2.2.12 on 2020-08-13 09:37

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listanimal', '0005_auto_20200813_0934'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animalnews',
            name='gallery_img',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.URLField(), null=True, size=None),
        ),
    ]
