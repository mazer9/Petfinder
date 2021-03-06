from django.db import models
from django.contrib.postgres.fields import ArrayField
from listanimal.enums import AnimalChoicesEnum

from django.contrib.contenttypes.fields import GenericRelation

from users.models.comment import Comment

class AnimalInfo(models.Model):
    """
    создает объявления о животных, форма создана
    под форму животных с сайта petfinder
    """
    number = models.CharField(max_length=200)
    animal_type = models.ForeignKey('AnimalType', on_delete=models.PROTECT,
                                    null=True)
    age = models.CharField(max_length=200)
    gender = models.CharField(max_length=200)
    size = models.CharField(choices=AnimalChoicesEnum.choices(),
                            max_length=200)
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=200)
    color = models.ForeignKey('AnimalColor', on_delete=models.PROTECT,
                              null=True)
    photos = ArrayField(models.URLField(null=True))
    comment = GenericRelation(Comment)

    def __str__(self):
        return self.name


class AnimalColor(models.Model):
    """
    во время сбора данных, в эту модель попадают цвета животных
    """
    primary = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.primary


class AnimalType(models.Model):
    """
    во время сбора данных, в эту модель попадают цвета животных
    """
    animal_type = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.animal_type
