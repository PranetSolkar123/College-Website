from django.db import models
from departments.models import Department

class Lab(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='labs/', blank=True, null=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='labs')
    capacity = models.IntegerField(null=True, blank=True)
    is_industry_sponsored = models.BooleanField(default=False)
    features = models.TextField(blank=True, help_text="Comma-separated list of features")

    @property
    def features_list(self):
        if not self.features:
            return []
        return [f.strip() for f in self.features.split(',') if f.strip()]

    def __str__(self):
        return self.name
