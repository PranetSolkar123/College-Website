from django.db import models
from departments.models import Department

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tag = models.CharField(max_length=100)
    image = models.ImageField(upload_to='achievements/', blank=True, null=True)
    date = models.DateField(null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True, related_name='achievements')

    def __str__(self):
        return self.title
