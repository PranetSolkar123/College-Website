from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Notice
from .serializers import NoticeSerializer

@api_view(['GET'])
def notice_list(request):
    category = request.query_params.get('category')
    notices = Notice.objects.filter(is_active=True).order_by('-date')
    if category:
        notices = notices.filter(category=category)
    return Response(NoticeSerializer(notices, many=True).data)
