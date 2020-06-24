from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser

class AnimalInfo(models.Model):
    number= models.CharField(max_length=200)
    animal_type=models.ForeignKey('AnimalType',on_delete=models.PROTECT,null=True)
    age=models.CharField(max_length=200)
    gender=models.CharField(max_length=200)
    size=models.CharField(choices=[('Large','Large'),('Medium','Medium'),('Small','Small')],max_length=200)
    name=models.CharField(max_length=200)
    status=models.CharField(max_length=200)
    color = models.ForeignKey('AnimalColor',on_delete=models.PROTECT,null=True)
    photos = ArrayField(models.URLField(null=True))

    def __str__(self):
        return self.name


class AnimalColor(models.Model):
    primary = models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.primary


class AnimalType(models.Model):
    animal_type = models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.animal_type


class AnimalNews(models.Model):
    url_news= models.URLField()
    description_news= models.TextField()
    heading= models.TextField()
    main_text = models.TextField(null=True)
    url_media = models.URLField(null=True)
    time_post = models.CharField(max_length=20)
    gallery_img = ArrayField(models.URLField(),null=True)

    def __str__(self):
        return self.description_news


class CustomUser(AbstractUser):
    favorit_animal = models.ManyToManyField('AnimalInfo')










