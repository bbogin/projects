# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('list', '0005_auto_20150804_2337'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='artwork',
            name='email',
        ),
        migrations.RemoveField(
            model_name='bike',
            name='email',
        ),
        migrations.RemoveField(
            model_name='book',
            name='email',
        ),
        migrations.RemoveField(
            model_name='dorm',
            name='email',
        ),
    ]
