from django import forms
from list.models import Book, Artwork, Dorm, Bike
from django.contrib.auth.models import User



class BookForm(forms.ModelForm):
    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

    # An inline class to provide additional information on the form.
    class Meta:
        # Provide an association between the ModelForm and a model
        model = Book
        exclude = ('creator', )



class ArtworkForm(forms.ModelForm):
    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

    class Meta:
        # Provide an association between the ModelForm and a model
        model = Artwork
        exclude = ('creator',)



class DormForm(forms.ModelForm):
    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

    class Meta:
        # Provide an association between the ModelForm and a model
        model = Dorm
        exclude = ('creator', )
        



class BikeForm(forms.ModelForm):
    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.title

    class Meta:
        # Provide an association between the ModelForm and a model
        model = Bike
        exclude = ('creator', )
        