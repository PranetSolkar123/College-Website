from django.contrib import admin

# Register your models here.

from .models import Placement, Recruiter

admin.site.register(Placement)
admin.site.register(Recruiter)