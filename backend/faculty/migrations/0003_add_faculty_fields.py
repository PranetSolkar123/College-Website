from django.db import migrations, models

class Migration(migrations.Migration):
    dependencies = [
        ('faculty', '0002_faculty_photo'),
    ]

    operations = [
        migrations.AddField(model_name='faculty', name='is_hod', field=models.BooleanField(default=False)),
        migrations.AddField(model_name='faculty', name='email', field=models.EmailField(blank=True)),
        migrations.AlterField(model_name='faculty', name='experience', field=models.CharField(max_length=100, blank=True)),
        migrations.AlterField(model_name='faculty', name='research_area', field=models.CharField(max_length=200, blank=True)),
    ]
