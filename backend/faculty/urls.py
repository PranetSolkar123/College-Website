from django.urls import path
from .views import faculty_list, faculty_detail, hod_list

urlpatterns = [
    path('', faculty_list),
    path('<int:pk>/', faculty_detail),
    path('hods/', hod_list),
]
