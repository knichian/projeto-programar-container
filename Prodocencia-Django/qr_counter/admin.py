# from django.contrib import admin
# from django.urls import reverse
# from django.http import HttpResponseRedirect
# from django.urls import path
# from django.utils.html import format_html
# from qr_counter.models import LandingQRCodeCounter, FormQRCodeCounter, HomeCounter

# class CounterAdmin(admin.ModelAdmin):
#     list_display = ('name', 'count', 'reset_button', 'first_column_value')

#     def reset_button(self, obj):
#         url = reverse('admin:reset_count', args=[obj._meta.model_name, obj.id])
#         return format_html('<a href="{}">Reset</a>', url)
    
#     reset_button.short_description = ''

#     def first_column_value(self, obj):
#         return obj.name
    
#     first_column_value.short_description = 'First Column'

#     def get_urls(self):
#         urls = super().get_urls()
#         custom_urls = [
#             path(
#                 '<path:model_name>/<int:object_id>/reset_count/',
#                 self.admin_site.admin_view(self.reset_count_view),
#                 name='reset_count',
#             ),
#         ]
#         return custom_urls + urls

#     def reset_count_view(self, request, model_name, object_id):
#         # Encontre o modelo correto com base no nome do modelo
#         models = {
#             'landingqrcodecounter': LandingQRCodeCounter,
#             'formqrcodecounter': FormQRCodeCounter,
#             'homecounter': HomeCounter,
#         }
#         model = models.get(model_name)
        
#         if not model:
#             return HttpResponseRedirect(reverse('admin:index'))

#         # Encontre o objeto com base no ID
#         obj = model.objects.filter(id=object_id).first()

#         if not obj:
#             return HttpResponseRedirect(reverse('admin:index'))

#         # Redefina o contador para 0
#         obj.count = 0
#         obj.save()

#         self.message_user(request, f'Contador para {obj.name} redefinido com sucesso para 0.')
#         return HttpResponseRedirect(reverse('admin:index'))

# # Registre os modelos de contadores com o administrador personalizado
# admin.site.register(LandingQRCodeCounter, CounterAdmin)
# admin.site.register(FormQRCodeCounter, CounterAdmin)
# admin.site.register(HomeCounter, CounterAdmin)
