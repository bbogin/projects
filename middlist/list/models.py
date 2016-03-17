from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django import forms


class Category(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
                self.slug = slugify(self.name)
                super(Category, self).save(*args, **kwargs)

    def __unicode__(self):  #For Python 2, use __str__ on Python 3
        return self.name

class Book(models.Model):
    category = models.ForeignKey(Category, default=2, editable=False)
    creator = models.ForeignKey(User)
    title = models.CharField(max_length=128)
    author = models.CharField(max_length=512)
    isbn = models.CharField(max_length=18)
    edition = models.IntegerField(max_length=3, blank=True)
    price = models.IntegerField(max_length=5)
    image = models.ImageField()
    date = models.DateField(auto_now=True, editable=False)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title


class Artwork(models.Model):
    category = models.ForeignKey(Category, default=1, editable=False)
    creator = models.ForeignKey(User)
    title = models.CharField(max_length=128)
    image = models.ImageField()
    description = models.TextField()
    price = models.IntegerField(max_length=5)
    date = models.DateField(auto_now=True, editable=False)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

class Dorm(models.Model):
    category = models.ForeignKey(Category, default=3, editable=False)
    creator = models.ForeignKey(User)
    title = models.CharField(max_length=128)
    image = models.ImageField()
    description = models.TextField()
    price = models.IntegerField(max_length=5)
    date = models.DateField(auto_now=True, editable=False)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

class Bike(models.Model):
    category = models.ForeignKey(Category, default=4, editable=False)
    creator = models.ForeignKey(User)
    title = models.CharField(max_length=128)
    image = models.ImageField()
    description = models.TextField()
    price = models.IntegerField(max_length=5)
    date = models.DateField(auto_now=True, editable=False)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title






