from django.shortcuts import render
from django.http import HttpResponse
from scout.query import Query
from scout.scraper import Scraper
import json


def index(request):
  return render(request, 'index.html', {})

def query(request):
  return HttpResponse(json.dumps(Query().get()))

def scrape(request):
  asin = request.GET.get('asin', '')
  return HttpResponse(json.dumps(Scraper(asin).get()))
