from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("teams/", views.teams, name="teams"),
    path("teams/<int:id>", views.team_page, name="team"),
    path("partners/", views.partners, name="partners"),
    path("blog/", views.blog, name="blog"),
    #path("account/", views.account, name="account")
]