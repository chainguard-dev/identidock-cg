FROM python

RUN groupadd -r uwsgi && useradd -r -g uwsgi uwsgi
RUN pip install Flask==3.0.2 uWSGI==2.0.24 requests==2.31.0 redis==5.0.3
WORKDIR /app
USER uwsgi
COPY app /app
COPY cmd.sh /

EXPOSE 9090 9191

CMD ["/cmd.sh"]
