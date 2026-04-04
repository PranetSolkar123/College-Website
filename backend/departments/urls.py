from django.urls import path
from .views import department_list, department_detail, department_by_code

urlpatterns = [
    path('', department_list),
    path('<int:pk>/', department_detail),
    path('code/<str:code>/', department_by_code),
]
