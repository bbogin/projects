from django.conf.urls import patterns, url
from list import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
        url(r'^add_book/$', views.add_book, name='add_book'),
        url(r'^add_artwork/$', views.add_artwork, name='add_artwork'),
        url(r'^add_bike/$', views.add_bike, name='add_bike'),
        url(r'^add_dorm/$', views.add_dorm, name='add_dorm'),
        url(r'^login/$', views.user_login, name='login'),
        url(r'^logout/$', views.user_logout, name='logout'),
        url(r'^myaccount/$', views.myaccount, name='myaccount'),
        url(r'^delete/(?P<slug>[\w\-]+)/(?P<itemid>[0-9]+)/$', views.deletepost, name='deletepost'),
	url(r'^(?P<category_name_slug>[\w\-]+)/$', views.category, name='category'),
	url(r'^(?P<category_name_slug>[\w\-]+)/(?P<itemid>[0-9]+)/$', views.details, name='details'),
	)