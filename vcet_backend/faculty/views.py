from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Faculty
from .serializers import FacultySerializer

@api_view(['GET'])
def faculty_list(request):
    faculty = Faculty.objects.all()
    serializer = FacultySerializer(faculty, many=True)
    return Response(serializer.data)