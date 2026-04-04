from django.urls import path
from .views import placement_list, recruiter_list

urlpatterns = [
    path('', placement_list),
    path('recruiters/', recruiter_list),
]