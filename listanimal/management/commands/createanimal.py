from django.core.management.base import BaseCommand
from listanimal.models import AnimalInfo,AnimalColor,AnimalType
import json,requests
from django.core.mail import send_mail
from petfinder.local import acess_token_attachment,group_id,login,password,client_id,client_secret
import vk_api
import logging
data = { 'grant_type':'client_credentials','client_id' : client_id, 'client_secret' : client_secret }
r = requests.post('https://api.petfinder.com/v2/oauth2/token', data=json.dumps(data), verify=False)
token_petfinder = json.loads(r.text)['access_token']
headers = { 'Authorization' : 'Bearer ' + token_petfinder }
acess_token_attachment=acess_token_attachment
group_id=group_id
login=login
password=password
vk_session=vk_api.VkApi(login,password,token=acess_token_attachment)
session_api=vk_session.get_api()
logger = logging.getLogger('commands.createanimal')
class Command(BaseCommand):
    def handle(self, *args, **options):
        self.createanimal()


    def createanimal(self):
        r = requests.get('https://api.petfinder.com/v2/animals?page=1', headers=headers, verify=False)
        j = json.loads(r.text)
        dict_animal = j.get('animals')
        summ_new_animals = ''
        for one_animal in dict_animal:
            animal_type = AnimalType.objects.get_or_create(animal_type=one_animal['type'])[0]
            animal_color = None
            if one_animal['colors']['primary'] is not None:
                animal_color = AnimalColor.objects.get_or_create(primary=one_animal['colors']['primary'])[0]
            url_animals = []
            for i in one_animal['photos']:
                url_animals.append(i['full'])
            defaults = {'animal_type': animal_type, 'color': animal_color,
                        'age': one_animal['age'], 'gender': one_animal['gender'],
                        'size': one_animal['size'], 'photos': url_animals,
                        'name': one_animal['name'], 'status': one_animal['status']}
            create_object, is_created = AnimalInfo.objects.update_or_create(number=one_animal['id'], defaults=defaults)
            if is_created:
                summ_new_animals += '\n' + 'Новое объявление:' + str(animal_type) + '' + defaults['name']
                self.vk_wall_post(one_animal,animal_type)
        self.send_massage(summ_new_animals,one_animal)

    def vk_wall_post(self,one_animal,animal_type):
        try:
            vk_session.method('wall.post', {'owner_id': -group_id,
                                        'from_group': 1,
                                        'message': 'Номер животного:{}\nТип животного:{}'
                                                   '\nВозраст:{}\nПол:{}\nГабариты:{}\nИмя:{}\nСтатус поиска:{}\n'
                                                   'Цвет:{}\nФотографии{}'.format(
                                            one_animal.get('number', None),
                                            animal_type,
                                            one_animal['age'],
                                            one_animal['gender'],
                                            one_animal['size'],
                                            one_animal['name'],
                                            one_animal['status'],
                                            one_animal.get('color', None),
                                            one_animal.get('photos', None)
                                        )})

        except:
            logger.error(msg='Ошибка отправки объявления в вк:' + one_animal['name'])

    def send_massage(self,summ_new_animals,one_animal):
        if summ_new_animals != '':
            send_mail('новое объявление епта', summ_new_animals, 'dkdjjdkd@gmail.com', ['paveligin1861@gmail.com'],
                      fail_silently=False)
        elif summ_new_animals == '':
            send_mail('нет объявленией', 'объявлений нет', 'dkdjjdkd@gmail.com', ['paveligin1861@gmail.com'],
                      fail_silently=False)
        return one_animal








