# start gunicorn
    # cd /root/Prodocencia-Django/
    # gunicorn -c '/root/conf/gunicorn_config.py' siteProdocencia.wsgi >> /root/.server_logs/gunircorn_main.log 2>&1 &
    
    cd /root/Prodocencia-Django/
    gunicorn -c '/root/conf/gunicorn_config.py' siteProdocencia.wsgi