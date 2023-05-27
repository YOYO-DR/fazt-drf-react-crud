from rest_framework import serializers
from .models import Task
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #seleccionamos lo campos para el json, en tupla
        # fields=('id','title','description','done')
        fields='__all__' #para todo