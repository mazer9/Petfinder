import logging

from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings

from listanimal.models import NewestLogFileContent

logger_news = logging.getLogger('commands.createnews')
logger_animal = logging.getLogger('commands.createanimal')


class SendMail:

    def send_animal(self, summ_new_animals, one_animal):
        """
        send_animal - отправляет сообщения пользователям сервиса
        о новых животных в питомнике
        """
        try:
            if summ_new_animals != '':
                send_mail('новое объявление', summ_new_animals,
                          settings.EMAIL_HOST_USER,
                          ['paveligin1861@gmail.com'],
                          fail_silently=False)
            else:
                send_mail('нет объявленией', 'объявлений нет',
                          'dkdjjdkd@gmail.com', ['paveligin1861@gmail.com'],
                          fail_silently=False)
        except Exception as error:
            logger_news.error(msg='Ошибка отправки новости на ящик:{},'
                                  '{},{}'.format(one_animal['name'],
                                                 timezone.now(), error))
            log_db = open('logger/news.log', 'r')
            NewestLogFileContent.objects.get_or_create(
                defaults={'log_filename': 'commands.createnews',
                          'content': log_db.read()})
            log_db.close()

    def send_news(self, summ_new_news, animal_news):
        """
        send_news - отправляет сообщения пользователям сервиса
        о новостях в сообществе
        """
        try:
            if summ_new_news != '':
                send_mail('новая новость ', summ_new_news,
                          settings.EMAIL_HOST_USER,
                          ['paveligin1861@gmail.com'],
                          fail_silently=False)
            else:
                send_mail('нет новостей', 'новостей нет',
                          settings.EMAIL_HOST_USER,
                          ['paveligin1861@gmail.com'],
                          fail_silently=False)
        except Exception as error:
            logger_news.error(msg='Ошибка отправки новости на ящик:{},{},'
                                  '{}'.format(
                                              animal_news['description_news'],
                                              timezone.now(), error))
            log_db = open('logger/news.log', 'r')
            NewestLogFileContent.objects.get_or_create(
                defaults={'log_filename': 'commands.createnews',
                          'content': log_db.read()})
            log_db.close()
