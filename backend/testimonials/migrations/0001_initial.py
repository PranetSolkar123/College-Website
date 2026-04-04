from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('role', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('batch_year', models.IntegerField(blank=True, null=True)),
                ('is_featured', models.BooleanField(default=False)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='testimonials/')),
            ],
        ),
    ]
