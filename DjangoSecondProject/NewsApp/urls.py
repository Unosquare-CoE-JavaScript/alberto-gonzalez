from django.urls import path
from .views import NewsResponse, Home, Contact, NewsDate

urlpatterns = [
    path('', Home, name='home'),
    path('news/', NewsResponse, name='news'),
    path('contact/', Contact, name='contact'),
    path('newsdate/', NewsDate, name='newsDate'),
]
