from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader
from .models import LinkedKeywords
from django.core.serializers.json import DjangoJSONEncoder

from collections import defaultdict





import json

def index(request):
	return HttpResponse("Hello, world. You're at the Trends index.")
	

def keyword(request, keywordsearch):
	keyword_list = LinkedKeywords.objects.filter(keyword=keywordsearch)

	movies = defaultdict(list)

	for k in keyword_list:
		movies[k.prodyear].append(k.title)

	j = {"results":[]}
	for k,v in movies.iteritems():
		# print k, v
		j["results"].append({"year":k, "count":len(v), "movies":v})

	j = json.dumps(j)
	context = {'j':j, 'k':keywordsearch}
	return render(request, 'keywords/keywords.html', context)
