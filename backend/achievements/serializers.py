from rest_framework import serializers
from .models import Achievement

class AchievementSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)
    department_code = serializers.CharField(source='department.code', read_only=True)

    class Meta:
        model = Achievement
        fields = '__all__'
