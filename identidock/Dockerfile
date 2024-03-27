FROM cgr.dev/chainguard/python:latest-dev as dev

ENV LANG=C.UTF-8
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/app/venv/bin:$PATH"

WORKDIR /app
RUN python -m venv /app/venv
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY app /app

EXPOSE 5000

ENTRYPOINT ["python"]
CMD ["identidock.py"]

FROM cgr.dev/chainguard/python:latest

WORKDIR /app
ENV PYTHONUNBUFFERED=1
ENV PATH="/app/venv/bin:$PATH"

COPY app/identidock.py ./
COPY --from=dev /app/venv /app/venv

EXPOSE 9090
ENTRYPOINT [ "gunicorn", "-b", "0.0.0.0:9090", "identidock:app" ]
