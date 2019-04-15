# Generated by Django 2.1.7 on 2019-04-10 17:24

from django.db import migrations, models
import django.db.models.deletion
import website.models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_auto_20190317_2117'),
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('kind', website.models.ChoiceArrayField(base_field=models.CharField(choices=[('dog', 'dog'), ('cat', 'cat'), ('horse', 'horse'), ('bird', 'bird'), ('reptile', 'reptile')], max_length=255), default=list, size=None)),
                ('race', models.CharField(max_length=255)),
                ('age', models.IntegerField(default=0)),
                ('weight', models.IntegerField(default=0)),
                ('size', website.models.ChoiceArrayField(base_field=models.CharField(choices=[('small', 'small'), ('medium', 'medium'), ('pig', 'pig')], max_length=255), default=list, size=None)),
                ('diseases', models.CharField(max_length=500)),
                ('character', website.models.ChoiceArrayField(base_field=models.CharField(choices=[('mild', 'mild'), ('aggressive', 'aggressive'), ('lazy', 'lazy'), ('unstable', 'unstable')], max_length=255), default=list, size=None)),
                ('allergies', models.CharField(max_length=500)),
                ('favorite_food', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=70)),
                ('password', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('street', models.CharField(max_length=255)),
                ('post_code', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='animal',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='animals', to='website.User'),
        ),
    ]
