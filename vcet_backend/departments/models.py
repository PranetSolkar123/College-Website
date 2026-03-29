from django.db import models

# Create your models here.

class Department(models.Model):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=10)
    intake = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return self.name