from django.urls import path
from.views import *
from qr_counter.views import HomeView

from.views import custom_404_view
from django.conf.urls import handler404


app_name = "mainSite"

handler404 = custom_404_view

urlpatterns = [

    # ========================= #
    #   Demonstration Section   #
    # ========================= #


    path('newPage', newPageView.as_view(), name='newPage'),
    
    
    # ======== #
    #   Home   #
    # ======== #
    

    path("", HomeView.as_view(), name="home"),


    # ================ #
    #   Static Links   #
    # ================ #


    path("analytics", AnalyticsView.as_view(), name="analytics"),
    path("form", FormView.as_view(), name="form"),
    path("showCount", ShowCountView.as_view(), name="showCount"),
    path("roadmap", RoadmapView.as_view(), name="roadmap"),
    path("motivations", MotivationsView.as_view(), name="motivations"),
    path("projetos", ProjetosView.as_view(), name="projetos"),


    
    
    # ============ #
    #   Projetos   #
    # ============ #
    
    
    path("scriptNewton", ScriptNewtonView.as_view(), name="scriptNewton"),
    path("calcLucaseDakro", CalcLucaseDakroView.as_view(), name="calcLucaseDakro"),
    


    # ============ #
    #   Hardware   #
    # ============ #


    path("page", PageView.as_view(), name="page"),
    path("fileSize", FileSizeView.as_view(), name="fileSize"),
    path("processingCapacity", ProcessingCapacityView.as_view(), name="processingCapacity"),
    path("processors", ProcessorsView.as_view(), name="processors"),
    path("randomAcess", RandomAcessView.as_view(), name="randomAcess"),
    path("internalStorage", InternalStorageView.as_view(), name="internalStorage"),
    path("ramMemory", RamMemoryView.as_view(), name="ramMemory"),
    path("quiz", QuizView.as_view(), name="quiz"),
    path("computerArqVideo", ComputerArqVideoView.as_view(), name="computerArqVideo"),
    path("computerArq", ComputerArqView.as_view(), name="computerArq"),
    
    
        # ======== #
        #   DATA   #
        # ======== #

    path("memoryTypes", MemoryTypesView.as_view(), name="memoryTypes"),
    

# ============ #
#   Software   #
# ============ #

    # ============== #
    #   Language C   #
    # ============== #
    
        # ============== #
        #   Data Types   #
        # ============== #


    path("boolean", BooleanView.as_view(), name="boolean"),
    path("caractere", CaractereView.as_view(), name="caractere"),
    path("inteiro", InteiroView.as_view(), name="inteiro"),
    path("real", RealView.as_view(), name="real"),
    path("string", StringView.as_view(), name="string"),

        # ================= #
        #   Common Errors   #
        # ================= #
        
    path("commonErrors", CommonErrorsView.as_view(), name="commonErrors"),
    
    
        # ============================ #
        #   Objetos de Apreendizagem   #
        # ============================ #
        
    path("quizDataTypesC", QuizDataTypesCView.as_view(), name="quizDataTypesC"),
    
    
        # ================== #
        #   Language Types   #
        # ================== #
        
    path("languageTypes", LanguageTypesView.as_view(), name="languageTypes"),
    

# ===================== #
#   Logic Programming   #
# ===================== #


    # ============== #
    #   Algorithms   #
    # ============== #
    
    
    path("algorithm", AlgorithmView.as_view(), name="algorithm"),
    path("fluxogram", FluxogramView.as_view(), name="fluxogram"),
    path("narrativeDescription", NarrativeDescriptionView.as_view(), name="narrativeDescription"),
    path("pseudocode", PseudocodeView.as_view(), name="pseudocode"),

    # ======== #
    #   Quiz   #
    # ======== #
    
    path("quizLogicProgramming", QuizLogicProgrammingView.as_view(), name="quizLogicProgramming"),

    # ====== #
    #   ??   #
    # ====== #
    
    
    path("dataTypeLogicProgramming", DataTypeLogicProgrammingView.as_view(), name="dataTypeLogicProgramming"),
    
    
    
    # ========================== #
    #   Computacional Thinking   #
    # ========================== #
    
    
    
    path("computacionalThinking", ComputacionalThinkingView.as_view(), name="computacionalThinking"),
    
    
    # Implementing Zone

    # path('<slug:slug>/', page_detail, name='page_detail'),
    path("imp", ImpView.as_view(), name="imp"),   
]


