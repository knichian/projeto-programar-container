# qr_counter/urls.py
from django.urls import path
from.views import *


app_name = "extProjects"

urlpatterns = [
    path("home", ExtProjectsMainView.as_view(), name="home"),
    path("projetoExt1", ExtProjectsP1View.as_view(), name="projetoExt1"),
]
