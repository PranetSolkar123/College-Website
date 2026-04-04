from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer

@api_view(['GET'])
def event_list(request):
    upcoming = request.query_params.get('upcoming')
    events = Event.objects.all().order_by('date')
    if upcoming:
        events = events.filter(is_upcoming=True)
    return Response(EventSerializer(events, many=True).data)
