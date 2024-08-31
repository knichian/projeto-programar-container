FROM python:3.12-bookworm
WORKDIR /root
COPY Prodocencia-Django Prodocencia-Django
COPY requirements.txt requirements.txt
COPY conf conf
COPY django_start_app.sh django_start_app.sh
RUN pip install -r requirements.txt
EXPOSE 8110
CMD [ "sh", "django_start_app.sh" ]