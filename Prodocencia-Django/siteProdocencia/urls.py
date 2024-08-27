

from django.contrib import admin
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static
from qr_counter.views import reset_all


urlpatterns = [
    path("", include("mainSite.urls")),
    path("", include("qr_counter.urls")),
    path("extProjects/", include("extProjects.urls")),
    
    path('admin/', admin.site.urls),
    path('admin/', include('django.contrib.auth.urls')),
    # path('admin/reset', reset_counter),  
    # path('admin/reset', reset_all, name='reset_all'), 

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
