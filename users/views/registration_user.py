from rest_framework import viewsets, permissions
from rest_framework.response import Response
from users.serializer import CreateUserProfileSerializer


class CreateUser(viewsets.ViewSet):
    """
    Принимает username и password,password2 ,при несовпадении
    с password и password2 возвращается ошибка
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = CreateUserProfileSerializer

    def create(self, request):

        serializer = CreateUserProfileSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        if validated_data['password'] != validated_data['password2']:
            return Response({'error': 'пароли не совпадают'})
        else:
            serializer.create_user(validated_data=validated_data)
            return Response(validated_data)
