from django.db import migrations, models

class Migration(migrations.Migration):
    dependencies = [
        ('departments', '0002_remove_department_description_and_more'),
    ]

    operations = [
        migrations.AddField(model_name='department', name='description', field=models.TextField(blank=True)),
        migrations.AddField(model_name='department', name='vision', field=models.TextField(blank=True)),
        migrations.AddField(model_name='department', name='mission', field=models.TextField(blank=True)),
        migrations.AddField(model_name='department', name='head_of_dept', field=models.CharField(max_length=200, blank=True)),
        migrations.AddField(model_name='department', name='color', field=models.CharField(max_length=20, blank=True)),
        migrations.AddField(model_name='department', name='icon', field=models.CharField(max_length=10, blank=True)),
        migrations.AlterField(model_name='department', name='code', field=models.CharField(max_length=10, unique=True)),
    ]
