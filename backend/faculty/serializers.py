from rest_framework import serializers
from .models import Faculty

class FacultySerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)
    department_code = serializers.CharField(source='department.code', read_only=True)

    class Meta:
        model = Faculty
        fields = '__all__'
