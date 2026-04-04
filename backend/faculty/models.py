from django.db import models
from departments.models import Department

class Faculty(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    qualification = models.CharField(max_length=200)
    experience = models.CharField(max_length=100, blank=True)
    research_area = models.CharField(max_length=200, blank=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='faculty')
    photo = models.ImageField(upload_to='faculty/', blank=True, null=True)
    is_hod = models.BooleanField(default=False)
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.name
