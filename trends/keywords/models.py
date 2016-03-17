# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class LinkedKeywords(models.Model):
    title = models.CharField(max_length=150, blank=True, null=True)
    keyword = models.CharField(max_length=150, blank=True, null=True)
    movie_id = models.IntegerField(blank=True, null=True)
    prodyear = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title+" "+self.keyword

    class Meta:
        managed = False
        db_table = 'linked_keywords'
