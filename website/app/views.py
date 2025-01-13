from django.shortcuts import render, HttpResponse
from django.http import Http404

def home(request):
    return render(request, "home.html")

def teams(request):
    return render(request, "teams.html")

def team_page(request, id=10):
    print("id", id)
    if 10 <= id < 39 and id != 28 and id != 29:
        return render(request, f"teams/team{id}.html")
    else:
        Http404()

def partners(request):
    return render(request, "partners.html")

def blog(request):
    return render(request, "blog.html")

def test(request):
    return render(request, "test.html")

"""def account(request):
    return render(request, "account.html")"""