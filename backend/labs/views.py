from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Lab
from .serializers import LabSerializer

@api_view(['GET'])
def lab_list(request):
    dept = request.query_params.get('dept')
    labs = Lab.objects.all()
    if dept:
        labs = labs.filter(department__code__iexact=dept)
    return Response(LabSerializer(labs, many=True, context={'request': request}).data)

@api_view(['GET'])
def lab_detail(request, pk):
    try:
        lab = Lab.objects.get(pk=pk)
    except Lab.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(LabSerializer(lab, context={'request': request}).data)
