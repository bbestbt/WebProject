# Generated by Django 2.0.7 on 2020-12-20 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_food_promo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotel',
            name='description',
        ),
        migrations.AddField(
            model_name='hotel',
            name='address',
            field=models.CharField(default=-1.0, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hotel',
            name='phone',
            field=models.CharField(default=-1.0, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hotel',
            name='website',
            field=models.CharField(default=-1.0, max_length=100),
            preserve_default=False,
        ),
    ]
