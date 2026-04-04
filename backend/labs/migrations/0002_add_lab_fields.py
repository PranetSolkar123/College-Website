from django.db import migrations, models

class Migration(migrations.Migration):
    dependencies = [
        ('labs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(model_name='lab', name='capacity', field=models.IntegerField(null=True, blank=True)),
        migrations.AddField(model_name='lab', name='is_industry_sponsored', field=models.BooleanField(default=False)),
        migrations.AddField(model_name='lab', name='features', field=models.TextField(blank=True)),
        migrations.AlterField(model_name='lab', name='description', field=models.TextField()),
    ]
