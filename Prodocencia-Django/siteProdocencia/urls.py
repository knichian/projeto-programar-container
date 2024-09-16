from django.contrib import admin
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static
from qr_counter.views import reset_all

urlpatterns = [

    path('projetoprogramar/admin/', admin.site.urls),
    path('projetoprogramar/admin/', include('django.contrib.auth.urls')),
    # path('admin/reset', reset_counter),  
    # path('admin/reset', reset_all, name='reset_all'), 

    path("projetoprogramar/", include("mainSite.urls")), # ( Gabriel: (...) )
    path("projetoprogramar/", include("qr_counter.urls")), # ( Gabriel: (...) )
    path("projetoprogramar/extProjects/", include("extProjects.urls")), 
    path('projetoprogramar/admin/', admin.site.urls),
    path('projetoprogramar/admin/', include('django.contrib.auth.urls')),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
