from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
    path('projects/',views.projects),
    path('productos/',views.productos, name="productos")
]