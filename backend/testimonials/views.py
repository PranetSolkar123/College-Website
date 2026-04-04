from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Testimonial
from .serializers import TestimonialSerializer

@api_view(['GET'])
def testimonial_list(request):
    featured = request.query_params.get('featured')
    testimonials = Testimonial.objects.all()
    if featured:
        testimonials = testimonials.filter(is_featured=True)
    return Response(TestimonialSerializer(testimonials, many=True, context={'request': request}).data)
