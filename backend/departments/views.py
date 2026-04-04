from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Department
from .serializers import DepartmentSerializer

@api_view(['GET'])
def department_list(request):
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def department_detail(request, pk):
    try:
        dept = Department.objects.get(pk=pk)
    except Department.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(DepartmentSerializer(dept).data)

@api_view(['GET'])
def department_by_code(request, code):
    try:
        dept = Department.objects.get(code__iexact=code)
    except Department.DoesNotExist:
        return Response({'error': f'Department with code {code} not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(DepartmentSerializer(dept).data)
