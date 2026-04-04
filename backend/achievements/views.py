from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Achievement
from .serializers import AchievementSerializer

@api_view(['GET'])
def achievement_list(request):
    dept = request.query_params.get('dept')
    achievements = Achievement.objects.all().order_by('-date')
    if dept:
        achievements = achievements.filter(department__code__iexact=dept)
    return Response(AchievementSerializer(achievements, many=True, context={'request': request}).data)
