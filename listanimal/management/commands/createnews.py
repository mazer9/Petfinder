from listanimal.parseranimal import RtNewsAnimalParser
from django.core.management.base import BaseCommand
from listanimal.models_news import AnimalNews
from django.core.mail import send_mail

import vk_api
import requests
from petfinder.settings import acess_token_attachment,group_id
import os
import time
import logging
logger = logging.getLogger('create.logger')
vk_session=vk_api.VkApi(token=acess_token_attachment)
upload_url=vk_session.method('photos.getWallUploadServer',{'group_id':group_id,'v':5.95})['upload_url']


class Command(BaseCommand):
    def handle(self, *args, **options):
        try:
            self.createnews()
        except:
            logger.info(msg='парсер сломался')


    def createnews(self):
        summ_new_news = ''
        news= RtNewsAnimalParser.rt_news_animal()
        for animal_news in news:
            create_object, is_created = AnimalNews.objects.update_or_create(heading=animal_news['heading'],defaults=animal_news)
            if is_created:
                self.vk_wall_post_news(animal_news,summ_new_news)
        self.send_news(summ_new_news,animal_news)

    def vk_wall_post_news(self,animal_news,summ_new_news):
        summ_new_news += '\n' + ' Заголовок статьи:' + animal_news['heading']
        try:
            if animal_news.get('url_media', None) is not None:
                if animal_news['url_media'].endswith('.mp4'):
                            vk_session.method('wall.post', {'owner_id': -group_id,
                                                            'from_group': 1,
                                                            'message': '{}\nСсылка на оригинал:{}\nВложение:{}\n{}\n{}\nСсылка на видео:{}'.format(
                                                                animal_news['time_post'], animal_news['url_news'],
                                                                animal_news.get('main_text', None),
                                                                animal_news['description_news'],
                                                                animal_news['heading'], animal_news['url_media'])})
                else:
                            photo = requests.get(animal_news['url_media'])
                            images = open('images.jpg', 'wb')
                            images.write(photo.content)
                            request = requests.post(upload_url, files={'file': open('images.jpg', 'rb')})
                            save_wall_photo = vk_session.method('photos.saveWallPhoto',
                                                                {'group_id': group_id, 'v': 5.95,
                                                                 'photo': request.json()['photo'],
                                                                 'server': request.json()['server'],
                                                                 'hash': request.json()['hash']})
                            saved_photo = 'photo' + str(save_wall_photo[0]['owner_id']) + '_' + str(
                                save_wall_photo[0]['id'])
                            vk_session.method('wall.post', {'owner_id': -group_id,
                                                            'from_group': 1,
                                                            'message': '{}\nСсылка на оригинал:{}\nВложение:{}\n{}\n{}'.format(
                                                                animal_news['time_post'], animal_news['url_news'],
                                                                animal_news.get('main_text', None),
                                                                animal_news['description_news'],
                                                                animal_news['heading']),
                                                            'attachments': saved_photo})
                            os.remove('images.jpg')
            elif animal_news.get('gallery_img', None) is not None:
                        saved_gallery = ''
                        for one_img in animal_news['gallery_img']:
                            photo = requests.get(one_img.replace(' ', ''))
                            images = open('images.jpg', 'wb')
                            images.write(photo.content)
                            time.sleep(5)
                            request = requests.post(upload_url, files={'file': open('images.jpg', 'rb')})
                            save_wall_photo = vk_session.method('photos.saveWallPhoto',
                                                                {'group_id': group_id, 'v': 5.95,
                                                                 'photo': request.json()['photo'],
                                                                 'server': request.json()['server'],
                                                                 'hash': request.json()['hash']})
                            saved_photo = 'photo' + str(save_wall_photo[0]['owner_id']) + '_' + str(
                                save_wall_photo[0]['id'])
                            saved_gallery += saved_photo + ','
                            os.remove('images.jpg')
                        vk_session.method('wall.post', {'owner_id': -group_id,
                                                        'from_group': 1,
                                                        'message': '{}\nСсылка на оригинал:{}\nВложение:{}\n{}\n{}'.format(
                                                            animal_news['time_post'], animal_news['url_news'],
                                                            animal_news.get('main_text', None),
                                                            animal_news['description_news'],
                                                            animal_news['heading']),
                                                        'attachments': saved_gallery})
            else:
                        vk_session.method('wall.post', {'owner_id': -group_id,
                                                        'from_group': 1,
                                                        'message': '{}\nСсылка на оригинал:{}\nВложение:{}\n{}\n{}'.format(
                                                            animal_news['time_post'], animal_news['url_news'],
                                                            animal_news.get('main_text', None),
                                                            animal_news['description_news'],
                                                            animal_news['heading'])})
        except:
            logger.error(msg='Ошибка отправки новости в вк ' + animal_news['description_news'])


    def send_news(self,summ_new_news,animal_news):
        if summ_new_news != '':
            send_mail('новая новость епта', summ_new_news, 'dkdjjdkd@gmail.com',
                                  ['paveligin1861@gmail.com'],
                                  fail_silently=False)
        elif summ_new_news == '':
            send_mail('нет новостей', 'новостей нет', 'dkdjjdkd@gmail.com', ['paveligin1861@gmail.com'],
                                  fail_silently=False)
        else:
            logger.error(msg='Ошибка отправки новости на ящик '+animal_news['description_news'])
