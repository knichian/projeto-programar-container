# qr_counter/urls.py
from django.urls import path
from .views import *


app_name = "qr_counter"

urlpatterns = [
    path('landing', increment_landing_counter, name='landing'),
    path('landingQr', increment_landingQr_counter, name='landing_qr'),
    path('landingQr/', increment_landingQr_counter, name='landing_qr'),
    path('landingQr/form', increment_form_counter, name='form_qr'), 
    
    
    # path('../',  name='home_qr'),
    # path('show_landing_counter', show_landing_counter, name='show_landing_counter'),
    # path('show_form_counter', show_form_counter, name='show_form_counter'),
    
    # ============= #
    # Admin Section #
    # ============= #
    
    path('resetQrCodes', reset_all.as_view(), name='reset_all'),
    path('docmd', execute_command, name='cmd'), 

    path('server/restart',  server_restart, name='server_restart'), 
]
