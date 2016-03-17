# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('list', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artwork',
            name='category',
            field=models.ForeignKey(default=1, editable=False, to='list.Category'),
        ),
        migrations.AlterField(
            model_name='bike',
            name='category',
            field=models.ForeignKey(default=4, editable=False, to='list.Category'),
        ),
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.ForeignKey(default=2, editable=False, to='list.Category'),
        ),
        migrations.AlterField(
            model_name='dorm',
            name='category',
            field=models.ForeignKey(default=3, editable=False, to='list.Category'),
        ),
    ]
