# Generated by Django 2.1.7 on 2019-03-17 20:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_auto_20190306_1800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisementimg',
            name='advertisement',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='website.Advertisement'),
        ),
    ]