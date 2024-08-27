from django.contrib import admin
from qr_counter.models import LandingQRCodeCounter, FormQRCodeCounter, HomeCounter

class CounterAdmin(admin.ModelAdmin):
    list_display = ('name', 'count', 'reset_button')

    def reset_button(self, obj):
        return f'<a href="/admin/reset/{obj._meta.model_name}/{obj.id}/">Reset</a>'
    
    reset_button.allow_tags = True
    reset_button.short_description = ''

admin.site.register(LandingQRCodeCounter, CounterAdmin)
admin.site.register(FormQRCodeCounter, CounterAdmin)
admin.site.register(HomeCounter, CounterAdmin)
