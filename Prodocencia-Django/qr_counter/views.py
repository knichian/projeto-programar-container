# qr_counter/views.py
from django.shortcuts import redirect, render
from django.views.generic import TemplateView
from .models import *
from django.http import HttpResponseNotFound
from django.http import HttpResponse
import subprocess
from django.contrib.auth.decorators import login_required, user_passes_test


# ============= #
# admin Section #
# ============= #

# Verifica se o usuário é um administrador
def is_admin(user):
    return user.is_authenticated and user.is_staff

class reset_all(TemplateView):
    
    def dispatch(self, *args, **kwargs):
        
        if self.request.user.is_authenticated:
            if self.request.user.is_staff:
                resetAll(models_to_reset)
                return base_view_to_success(self.request, 'Resetado com sucesso!!', title="Reset")
                
        return base_view_to_success(self.request, 'Tem nada aqui não', title="Tá Locão")
    
    
@user_passes_test(is_admin)
# def reset_all(request):
#     if request.user.is_authenticated and request.user.is_staff:
#         resetAll(models_to_reset)
#         return HttpResponse("Resetado com sucesso!!")
#     else:
#         return access_denied(request)

def access_denied(request):
    return base_view_to_success(request, 'Tem nada aqui não', title="Tá Locão")



@login_required
@user_passes_test(is_admin)
def execute_command(request):
    # Comando que você deseja executar
    command = "cat cheatsheetdeploy.txt"
    
    try:
        # Execute o comando e capture a saída
        output = subprocess.check_output(command, shell=True, universal_newlines=True)
        # return HttpResponse(f"Saída do comando:\n{output}")
        return base_view_to_success(request, output, 'Teste')
    except subprocess.CalledProcessError as e:
        # return HttpResponse(f"Erro ao executar o comando: {e}")
        return base_view_to_success(request, {e}, 'Teste')


@login_required
@user_passes_test(is_admin)
def server_restart(request):
    # Comando que você deseja executar
    command = "/root/.bash_scripts/server_script.sh restart"
    
    try:
        # Execute o comando e capture a saída
        output = subprocess.check_output(command, shell=True, universal_newlines=True)
        return base_view_to_success(request, output, 'Teste')
    except subprocess.CalledProcessError as e:
        return base_view_to_success(request, str(e), 'Teste')



def increment_landing_counter(request):
    counter, created = LandingCounter.objects.get_or_create(pk=1)
    counter.count += 1
    counter.save()
    return redirect('..') 

def increment_landingQr_counter(request):
    counter, created =LandingQRCodeCounter.objects.get_or_create(pk=1)
    counter.count += 1
    counter.save()
    return redirect('../')


def increment_form_counter(request):
    counter, created = FormQRCodeCounter.objects.get_or_create(pk=1)
    counter.count += 1
    counter.save()
    return redirect('../form') 


def base_view_to_success(request, message, title="Status"):
    # Crie o trecho HTML que você deseja incorporar
    custom_html = f'<section class="topics text"><div class="topicsTextInner"><h2 id="siteObjectives">{message}</h2></div></section>'
    
    # Passe o HTML como uma variável no contexto, juntamente com o título
    context = {'content': custom_html, 'title': title}
    return render(request, 'base.html', context)





def resetAll(models):
    for model in models:
        counter, created = model.objects.get_or_create(pk=1)
        counter.count = 0
        counter.save()
        

# Uso da função para redefinir contadores
models_to_reset = [
    LandingCounter,
    LandingQRCodeCounter,
    FormQRCodeCounter,
    HomeCounter,
]



class HomeView(TemplateView):
    template_name = "home.html"
    
    def increment_home_counter(request):
        counter, created = HomeCounter.objects.get_or_create(pk=1)
        counter.count += 1
        counter.save()
        
    def get(self, request, *args, **kwargs):
        # Chame a função para incrementar o contador
        self.increment_home_counter()
        
        # Continue com a lógica da visualização, se necessário
        return super().get(request, *args, **kwargs)








# def show_landing_counter(request):
#     landing_qr_counter = LandingQRCodeCounter.objects.first()
#     return render(request, 'showCounter.html', {'landing_qr_counter':  landing_qr_counter})

# def show_form_counter(request):
#     form_qr_counter = FormQRCodeCounter.objects.first()
#     return render(request, 'showCounter.html', {'form_qr_counter':  form_qr_counter})




def reset_counter(request, model_name, object_id):
    if model_name == 'landingqrcodecounter':
        counter_model = LandingQRCodeCounter
    elif model_name == 'formqrcodecounter':
        counter_model = FormQRCodeCounter
    elif model_name == 'homecounter':
        counter_model = HomeCounter
    else:
        return HttpResponseNotFound("Model not found")

    counter = counter_model.objects.filter(pk=object_id).first()
    if counter:
        counter.count = 0
        counter.save()
    
    return redirect(f"/admin/{model_name}/{object_id}/change/")
