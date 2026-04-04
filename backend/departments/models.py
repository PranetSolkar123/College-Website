from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=10, unique=True)
    established_year = models.IntegerField(default=2000)
    intake = models.IntegerField()
    is_nba_accredited = models.BooleanField(default=False)
    tagline = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    vision = models.TextField(blank=True)
    mission = models.TextField(blank=True)
    head_of_dept = models.CharField(max_length=200, blank=True)
    color = models.CharField(max_length=20, blank=True)
    icon = models.CharField(max_length=10, blank=True)

    def __str__(self):
        return self.name
