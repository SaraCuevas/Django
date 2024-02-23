
from django.http import HttpResponse,JsonResponse
from .models import Producto, Project
from django.shortcuts import render 
# Create your views here.

def hello(request):
    return HttpResponse("Hello world")

def about(request):
    return HttpResponse("About")

def productos(request):
   # productos =  list(Producto.objects.values())
    productos = list(Producto.objects.values())
    data={'productos': productos}
    return JsonResponse(data, 'products.html')

def projects(request):
    projects =  list(Project.objects.values())
    return JsonResponse(projects, safe=False)