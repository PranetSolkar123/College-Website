from django.db import models

class Event(models.Model):
    EVENT_TYPES = [
        ('Technical', 'Technical'),
        ('Cultural', 'Cultural'),
        ('Sports', 'Sports'),
        ('Seminar', 'Seminar'),
        ('Workshop', 'Workshop'),
        ('Other', 'Other'),
    ]
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    date = models.DateField()
    venue = models.CharField(max_length=200, blank=True)
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES, default='Other')
    link = models.URLField(blank=True)
    is_upcoming = models.BooleanField(default=True)

    def __str__(self):
        return self.title
