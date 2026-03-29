from django.db import models
from departments.models import Department

class Faculty(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    qualification = models.CharField(max_length=200)
    experience = models.CharField(max_length=100)
    research_area = models.CharField(max_length=200)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    photo = models.ImageField(upload_to='faculty/', blank=True, null=True)

    def __str__(self):
        return self.name