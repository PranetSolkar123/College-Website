from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('description', models.TextField(blank=True)),
                ('date', models.DateField()),
                ('venue', models.CharField(blank=True, max_length=200)),
                ('event_type', models.CharField(choices=[('Technical','Technical'),('Cultural','Cultural'),('Sports','Sports'),('Seminar','Seminar'),('Workshop','Workshop'),('Other','Other')], default='Other', max_length=50)),
                ('link', models.URLField(blank=True)),
                ('is_upcoming', models.BooleanField(default=True)),
            ],
        ),
    ]
