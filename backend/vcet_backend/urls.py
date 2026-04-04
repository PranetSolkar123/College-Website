from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/departments/', include('departments.urls')),
    path('api/faculty/', include('faculty.urls')),
    path('api/labs/', include('labs.urls')),
    path('api/placements/', include('placements.urls')),
    path('api/achievements/', include('achievements.urls')),
    path('api/events/', include('events.urls')),
    path('api/testimonials/', include('testimonials.urls')),
    path('api/notices/', include('notices.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
