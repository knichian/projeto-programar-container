
"""
Django settings for siteProdocencia project.

Generated by 'django-admin startproject' using Django 4.1.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from pathlib import Path
import logging
import os
from dotenv import load_dotenv

if __package__ is None or __package__ == '':
    from aux_scripts import get_allowed_hosts, format_csrf_trusted_origins
else:
    from .aux_scripts import get_allowed_hosts, format_csrf_trusted_origins

load_dotenv()


SECURE_CROSS_ORIGIN_OPENER_POLICY = None

WHITENOISE_USE_FINDERS = True

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')    

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.getenv('DEBUG') == 'True'

SETTINGS_PATH = os.path.abspath(__file__)

ALLOWED_HOSTS = ['189.84.240.25', '100.117.225.48', 'cloudhub.iprj.uerj.br', '10.0.0.106:8110', '10.0.0.106']
ALLOWED_HOSTS.extend(get_allowed_hosts(SETTINGS_PATH))

CSRF_TRUSTED_ORIGINS = [
    'http://projetoprogramar.tech',
    'https://projetoprogramar.tech',
    'http://10.0.0.106',
    'http://127.0.0.1',
    'http://189.84.240.251',
    '100.117.225.48', # TailScale
    'http://localhost',
    'cloudhub.iprj.uerj.br'
]

CSRF_TRUSTED_ORIGINS.extend(format_csrf_trusted_origins(get_allowed_hosts(SETTINGS_PATH)))

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG',
    },
}

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'livereload',
    'django.contrib.staticfiles',
    'mainSite',
    'qr_counter',
    'utils',
]

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'livereload.middleware.LiveReloadScript',
]

ROOT_URLCONF = 'siteProdocencia.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'utils.context_processors.landing_counter',
                'utils.context_processors.landing_counter_qr',
                'utils.context_processors.form_counter_qr',
                'utils.context_processors.home_counter',
            ],
        },
    },
]

WSGI_APPLICATION = 'siteProdocencia.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'database/db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

# STATIC_URL = '/root/Prodocencia-Django/static/' # ( Gabriel: desativado e substituido pelo caminho mais simples )
# STATIC_URL = '/static/' # ( Gabriel: caminho mais simples para requisição dos statics)
STATIC_URL = '/projetoprogramar/static/' # ( Gabriel: caminho mais simples para requisição dos statics)
STATICFILES_DIRS = [ BASE_DIR / 'static' ]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STATIC_ROOT = BASE_DIR / "static_cdn"


# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

# DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
