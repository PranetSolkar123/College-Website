from rest_framework import serializers
from .models import Lab

class LabSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)
    department_code = serializers.CharField(source='department.code', read_only=True)
    features_list = serializers.ReadOnlyField()

    class Meta:
        model = Lab
        fields = '__all__'
