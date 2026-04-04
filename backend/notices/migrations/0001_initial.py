from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=400)),
                ('link', models.URLField(blank=True)),
                ('category', models.CharField(choices=[('Admission','Admission'),('Exam','Exam'),('Event','Event'),('General','General'),('Placement','Placement')], default='General', max_length=50)),
                ('date', models.DateField(auto_now_add=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]
