from django.db import migrations, models
import django.db.models.deletion

class Migration(migrations.Migration):
    dependencies = [
        ('achievements', '0001_initial'),
        ('departments', '0003_add_dept_fields'),
    ]

    operations = [
        migrations.AddField(model_name='achievement', name='date', field=models.DateField(null=True, blank=True)),
        migrations.AddField(model_name='achievement', name='department', field=models.ForeignKey(
            blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
            related_name='achievements', to='departments.department')),
    ]
