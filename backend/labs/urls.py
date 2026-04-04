from django.urls import path
from .views import lab_list, lab_detail

urlpatterns = [
    path('', lab_list),
    path('<int:pk>/', lab_detail),
]
