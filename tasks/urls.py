from django.urls import path,include
from rest_framework import routers
from .views import TaskView
from rest_framework.documentation import include_docs_urls # de coreapi

# esto genera las rutas get post put delete
router = routers.DefaultRouter()
#ruta de la app, vista de la app, name
router.register(r'tasks',TaskView,'tasks')

urlpatterns = [ #http://127.0.0.1:8000/tasks/api/v1/tasks el ultimo tasks es el name que le puse en el register
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls(title="Tasks API"))
]
