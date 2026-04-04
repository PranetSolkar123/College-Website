from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    text = models.TextField()
    batch_year = models.IntegerField(null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)

    def __str__(self):
        return self.name
