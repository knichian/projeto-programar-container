# context_processors.py
from qr_counter.models import *

def landing_counter (request):
    landing_counter = LandingCounter.objects.first()
    return {'landing_counter': landing_counter}

def landing_counter_qr(request):
    landing_qr_counter = LandingQRCodeCounter.objects.first()
    return {'landing_counter_qr': landing_qr_counter}


def form_counter_qr(request):
    form_qr_counter = FormQRCodeCounter.objects.first()
    return {'form_counter_qr': form_qr_counter}

def home_counter(request):
    home_counter = HomeCounter.objects.first()
    return {'home_counter': home_counter}
