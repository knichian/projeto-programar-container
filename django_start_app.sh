cd /root/Prodocencia-Django/
gunicorn -c '/root/conf/gunicorn_config.py' siteProdocencia.wsgi
# --error-logfile /root/database/error.log
# --access-logformat /root/database/access.log