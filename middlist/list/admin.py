from django.contrib import admin
from list.models import Category, Book, Artwork, Dorm, Bike

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('name',)}

admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Artwork)
admin.site.register(Dorm)
admin.site.register(Bike)

