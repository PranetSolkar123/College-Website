from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Lab
from .serializers import LabSerializer


@api_view(['GET'])
def lab_list(request):
    labs = Lab.objects.all()
    serializer = LabSerializer(labs, many=True)
    return Response(serializer.data)