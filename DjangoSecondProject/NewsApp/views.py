from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import News

# Create your views here.


def Home(request):
    context = {
        "name": "Beto",
        "number": 1717171,
    }

    return render(request, 'home.html', context)


def NewsResponse(request):

    obj = News.objects.get(id=1)

    context = {
        "list": ["Python", "Java", "C#", "Kotliin", "Ruby"],
        "mynum": 40,
        "data": obj
    }
    return render(request, 'news.html', context)


def NewsDate(request):
    return render(request, 'newsdate.html')


def Contact(request):
    return render(request, 'contact.html')
