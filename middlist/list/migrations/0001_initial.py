# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artwork',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('image', models.ImageField(upload_to=b'')),
                ('description', models.TextField()),
                ('price', models.IntegerField(max_length=5)),
                ('date', models.DateField(auto_now=True)),
                ('email', models.EmailField(max_length=75)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('image', models.ImageField(upload_to=b'')),
                ('description', models.TextField()),
                ('price', models.IntegerField(max_length=5)),
                ('date', models.DateField(auto_now=True)),
                ('email', models.EmailField(max_length=75)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('author', models.CharField(max_length=512)),
                ('isbn', models.CharField(max_length=18)),
                ('edition', models.IntegerField(max_length=3, blank=True)),
                ('price', models.IntegerField(max_length=5)),
                ('email', models.EmailField(max_length=75)),
                ('image', models.ImageField(upload_to=b'')),
                ('date', models.DateField(auto_now=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=128)),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Dorm',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('image', models.ImageField(upload_to=b'')),
                ('description', models.TextField()),
                ('price', models.IntegerField(max_length=5)),
                ('date', models.DateField(auto_now=True)),
                ('email', models.EmailField(max_length=75)),
                ('category', models.ForeignKey(default=10, editable=False, to='list.Category')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.ForeignKey(default=8, editable=False, to='list.Category'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bike',
            name='category',
            field=models.ForeignKey(default=11, editable=False, to='list.Category'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='artwork',
            name='category',
            field=models.ForeignKey(default=9, editable=False, to='list.Category'),
            preserve_default=True,
        ),
    ]
