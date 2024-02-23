from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)

class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    precio = models.CharField(max_length=5)
    descripcion = models.TextField()
    stock = models.CharField(max_length=5)

    def __str__(self):
        return self.nombre + '-' + self.precio+ '-' + self.stock