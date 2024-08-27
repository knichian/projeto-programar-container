
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import render, redirect
from django.http import HttpResponseForbidden




# ========================= #
#   Demonstration Section   #
# ========================= #


class newPageView(TemplateView):
    template_name = "newPage.html"
    
    
    
# ===================== #
#   Not Found Section   #
# ===================== #


def custom_404_view(request, exception):
    return render(request, '404.html', {}, status=404)



# ================= #
#   Admin Section   #
# ================= #

def base_view_to_success(request, message, title="Status"):
    # Crie o trecho HTML que você deseja incorporar
    custom_html = f'<section class="topics text"><div class="topicsTextInner"><h2 id="siteObjectives">{message}</h2></div></section>'
    
    # Passe o HTML como uma variável no contexto, juntamente com o título
    context = {'content': custom_html, 'title': title}
    return render(request, 'base.html', context)


# @method_decorator(login_required, name='dispatch')
class ShowCountView(TemplateView):
    template_name = "pages/accesses.html"

    def dispatch(self, *args, **kwargs):
        
        if self.request.user.is_authenticated:
            if self.request.user.is_staff:
                return super().dispatch(*args, **kwargs)
                
        return base_view_to_success(self.request, 'Tem nada aqui não', title="Tá Locão")
        
        

# ================ #
#   Static Links   #
# ================ #


# class showCountView(TemplateView):
#     template_name = "pages/accesses.html"


    
class AnalyticsView(TemplateView):
    template_name = "pages/analytics.html"
    
class FormView(TemplateView):
    template_name = "pages/form.html"

class RoadmapView(TemplateView):
    template_name = "pages/roadmap.html"
    
class MotivationsView(TemplateView):
    template_name = "pages/projetos/motivations.html"

class ProjetosView(TemplateView):
    template_name = "pages/projetos.html"
    
    
    # ============ #
    #   Projetos   #
    # ============ #


class ScriptNewtonView(TemplateView):
    template_name = "pages/projetos/scriptNewton.html"
    
class CalcLucaseDakroView(TemplateView):
    template_name = "pages/projetos/calcLucaseDakro.html"



# ============ #
#   Hardware   #
# ============ #

    
class PageView (TemplateView):
    template_name = "pages/hardware/computerArq/computerLimitations/page.html"

class FileSizeView (TemplateView):
    template_name = "pages/hardware/computerArq/computerLimitations/fileSize.html"

class ProcessingCapacityView (TemplateView):
    template_name = "pages/hardware/computerArq/computerLimitations/processingCapacity.html"

class ProcessorsView (TemplateView):
    template_name = "pages/hardware/computerArq/dataProcessing/processors.html"

class RandomAcessView (TemplateView):
    template_name = "pages/hardware/computerArq/dataProcessing/randomAcess.html"

class InternalStorageView (TemplateView):
    template_name = "pages/hardware/computerArq/dataStorage/internalStorage.html"

class RamMemoryView (TemplateView):
    template_name = "pages/hardware/computerArq/dataStorage/ramMemory.html"

class QuizView (TemplateView):
    template_name = "pages/hardware/computerArq/extra/quiz.html"
    
class ComputerArqVideoView (TemplateView):
    template_name = "pages/hardware/computerArq/extra/computerArqVideo.html"

class ComputerArqView (TemplateView):
    template_name = "pages/hardware/computerArq/computerArq.html"


    # ======== #
    #   DATA   #
    # ======== #
    
class MemoryTypesView (TemplateView):
    template_name = "pages/hardware/computerArq/memoryTypes.html"
    

# ============ #
#   Software   #
# ============ #

    # ============== #
    #   Language C   #
    # ============== #
    
        # ============== #
        #   Data Types   #
        # ============== #


class BooleanView (TemplateView):
    template_name = "pages/software/languageC/dataType/boolean.html"

class CaractereView (TemplateView):
    template_name = "pages/software/languageC/dataType/caractere.html"

class InteiroView (TemplateView):
    template_name = "pages/software/languageC/dataType/inteiro.html"

class RealView (TemplateView):
    template_name = "pages/software/languageC/dataType/real.html"

class StringView (TemplateView):
    template_name = "pages/software/languageC/dataType/string.html"
    

        # ================= #
        #   Common Errors   #
        # ================= #
    
    
class CommonErrorsView (TemplateView):
    template_name = "pages/software/languageC/commonErrors.html"
    
    
        # ============================ #
        #   Objetos de Apreendizagem   #
        # ============================ #


class QuizDataTypesCView (TemplateView):
    template_name = "pages/software/languageC/learningObjects/quizDataTypesC.html"


        # ================== #
        #   Language Types   #
        # ================== #
        
class LanguageTypesView (TemplateView):
    template_name = "pages/software/languageTypes.html"


# ===================== #
#   Logic Programming   #
# ===================== #   



    # ============== #
    #   Algorithms   #
    # ============== #


class AlgorithmView (TemplateView):
    template_name = "pages/logicProgramming/algorithms/algorithm.html"

class FluxogramView (TemplateView):
    template_name = "pages/logicProgramming/algorithms/fluxogram.html"

class NarrativeDescriptionView (TemplateView):
    template_name = "pages/logicProgramming/algorithms/narrativeDescription.html"

class PseudocodeView (TemplateView):
    template_name = "pages/logicProgramming/algorithms/pseudocode.html"
    
    # ======== #
    #   Quiz   #
    # ======== #
    
class QuizLogicProgrammingView (TemplateView):
    template_name = "pages/logicProgramming/quiz.html"
    
    
    # ====== #
    #   ??   #
    # ====== #

class DataTypeLogicProgrammingView (TemplateView):
    template_name = "pages/logicProgramming/dataTypes.html"
    




    # ========================== #
    #   Computacional Thinking   #
    # ========================== #
    
    
class ComputacionalThinkingView (TemplateView):
    template_name = "pages/computacionalThinking.html"

# ========= #
#   Extra   #
# ========= #


# def admin_page(request):
#     return render(request, 'admin/index.html')

    
# from django.shortcuts import get_object_or_404, render
# from django.views.generic import DetailView
# from .models import Page

# class PageDetailView(DetailView):
#     model = Page
#     template_name = 'page_detail.html'
#     context_object_name = 'page'



# def page_detail(request, slug):
#     page = get_object_or_404(Page, slug=slug)
#     return render(request, 'page_detail.html', {'page': page})


# =================== #
#  Implementing Zone  #
# =================== #


class ImpView (TemplateView):
    template_name = "testCase/layout/imp.html"