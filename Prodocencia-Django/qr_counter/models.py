from django.db import models

# Create your models here.


# qr_counter/models.py
class LandingCounter(models.Model):
    count = models.PositiveIntegerField(default=0)
    
class LandingQRCodeCounter(models.Model):
    count = models.PositiveIntegerField(default=0)
    
class FormQRCodeCounter(models.Model):
    count = models.PositiveIntegerField(default=0)
    
class HomeCounter(models.Model):
    count = models.PositiveIntegerField(default=0)