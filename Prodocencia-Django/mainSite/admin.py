from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import *

admin.site.unregister(User)
admin.site.register(User, UserAdmin)


# @admin.register(Page)
# class PageAdmin(admin.ModelAdmin):
#     pass


# admin.site.register(Page)