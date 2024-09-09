FROM ubuntu
RUN apt update && apt install python3 -y
COPY app.py .
ENTRYPOINT [ "python3", "app.py" ]