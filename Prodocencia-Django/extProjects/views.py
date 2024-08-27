from django.views.generic import TemplateView

# Create your views here.


class ExtProjectsMainView (TemplateView):
    template_name = "pages/externalProjects/extProjectsMain.html"

class ExtProjectsP1View (TemplateView):
    template_name = "pages/externalProjects/projeto1.html"

class ExtProjectsP2View (TemplateView):
    template_name = "pages/externalProjects/projeto2.html"
    