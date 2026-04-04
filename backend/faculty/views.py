from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Faculty
from .serializers import FacultySerializer

@api_view(['GET'])
def faculty_list(request):
    dept = request.query_params.get('dept')
    faculty = Faculty.objects.all()
    if dept:
        faculty = faculty.filter(department__code__iexact=dept)
    serializer = FacultySerializer(faculty, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def faculty_detail(request, pk):
    try:
        f = Faculty.objects.get(pk=pk)
    except Faculty.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(FacultySerializer(f, context={'request': request}).data)

@api_view(['GET'])
def hod_list(request):
    hods = Faculty.objects.filter(is_hod=True)
    return Response(FacultySerializer(hods, many=True, context={'request': request}).data)
