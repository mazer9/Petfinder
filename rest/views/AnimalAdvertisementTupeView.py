from django.http import HttpRequest
from django.utils import timezone

from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from listanimal.models import NewestLogFileContent
from listanimal.models import AnimalType
from rest.serializer.serializers_animal import AnimalTypeSerializer

from drf_yasg.views import get_schema_view

import logging

logger = logging.getLogger('rest.views')
SchemaView=get_schema_view()

class LoggerRequest:

    def __init__(self, get_response):
        self.get_response=get_response

    def __call__(self, request):
        response=self.get_response(request)
        if response.status_code==401:
            logger.error(msg='Попытка пройти по ссылке без авторизации {},{} \n'.format(str(HttpRequest.get_full_path(request)),str(timezone.now())))
            log_db=open('listanimal/logger/request_err.log','r').readlines()[-100:-1]
            index=0
            for log in log_db:
                log_db[index]=log.rstrip()
                index+=1
            log_db.reverse()
            NewestLogFileContent.objects.update_or_create(log_filename='create.logger',defaults={'content':log_db})
        return response

class AnimalAdvertisementTupeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):
        type = AnimalType.objects.all()
        serializer=AnimalTypeSerializer(type,many=True)
        return Response(serializer.data)