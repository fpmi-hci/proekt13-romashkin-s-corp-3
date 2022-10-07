FROM alpine:3.14
RUN apk add --update py3-pip
COPY cicdbuzz/requirements.txt /src/requirements.txt
RUN pip install -r /src/requirements.txt
COPY cicdbuzz/app.py /src
COPY cicdbuzz/buzz /src/buzz
CMD ["python3","/src/app.py"]
