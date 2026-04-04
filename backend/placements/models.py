from django.db import models

# Create your models here.

class Placement(models.Model):
    year = models.CharField(max_length=20)
    students_placed = models.IntegerField()
    highest_package = models.DecimalField(max_digits=10, decimal_places=2)
    average_package = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.year
    
class Recruiter(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='recruiters/', blank=True, null=True)

    def __str__(self):
        return self.name