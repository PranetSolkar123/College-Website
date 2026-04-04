from django.db import models

class Notice(models.Model):
    CATEGORIES = [
        ('Admission', 'Admission'),
        ('Exam', 'Exam'),
        ('Event', 'Event'),
        ('General', 'General'),
        ('Placement', 'Placement'),
    ]
    title = models.CharField(max_length=400)
    link = models.URLField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORIES, default='General')
    date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
