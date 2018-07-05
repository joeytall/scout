from django.contrib import admin
from django.urls import path
from scout.views import index, query, scrape

urlpatterns = [
  path('admin/', admin.site.urls),
  path('', index),
  path('query/', query),
  path('scrape', scrape),
]
