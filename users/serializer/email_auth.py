from users.models import EmailAuthAsk
from users.models import CustomUser
from rest_framework import serializers

from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpRequest

from uuid import uuid4


class EmailAuthSerialazer(serializers.ModelSerializer):
    """
    Отправляет на почту сообщение с ссылкой на подтверждение,
    в сообщении готовая ссылка с ключем
    создает модель заявки на стороне сервера
    """

    class Meta:
        model = CustomUser
        fields = ['email', 'password']

    def email_auth(self, validated_data, request):
        key = uuid4()
        EmailAuthSerialazer.send_mail_auth(request, key)
        email_ask = EmailAuthAsk.objects.create(user=request.user, key=key,
                                                email_e=self.validated_data['email'])
        return email_ask

    def send_mail_auth(self, request, key):
        send_mail('Подтверждение email',
                  'Подтвердите email перейдя по ссылке 127.0.0.1:8000{}?key={}'
                  .format(str(HttpRequest.get_full_path(request)), key),
                  settings.EMAIL_HOST_USER, [self.validated_data['email']],
                  fail_silently=False)
