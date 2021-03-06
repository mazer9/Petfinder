from django.db import models


class EmailAuthAsk(models.Model):
    """
    Модель заявки для подтверждения email в аккаунте
    """
    email_e = models.EmailField(max_length=200, null=True)
    user = models.ForeignKey('users.CustomUser', on_delete=models.PROTECT)
    key = models.CharField(max_length=199)
    time_create = models.DateTimeField(auto_now_add=True)
