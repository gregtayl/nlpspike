FROM python:3.6-jessie

# Install git
RUN apt-get update && apt-get install -y git

# Use pip to install requirements
WORKDIR /app
COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# Copy over the remainder of the application
COPY . .

# Use the default Flask webserver (okay for a spike, but better WSGI server like gunicorn)
ENTRYPOINT [ "python", "api.py" ]