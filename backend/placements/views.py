from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Placement, Recruiter
from .serializers import PlacementSerializer, RecruiterSerializer

# Create your views here.


@api_view(['GET'])
def placement_list(request):
    placements = Placement.objects.all()
    serializer = PlacementSerializer(placements, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def recruiter_list(request):
    recruiters = Recruiter.objects.all()
    serializer = RecruiterSerializer(recruiters, many=True)
    return Response(serializer.data)