FROM node:8.15.0-jessie as client-build

# Build the react client
WORKDIR /src
COPY ./client .
RUN yarn install && yarn build


FROM python:3.6-jessie as runtime

# Install git
RUN apt-get update && apt-get install -y git

# Use pip to install requirements
WORKDIR /app
COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# Copy the application
COPY . .

# Copy the client build folder of the previous stage
COPY --from=client-build /src/build ./client/build

# Use the default Flask webserver, which is okay for a spike, but a proper WSGI server like gunicorn should be used in production
ENTRYPOINT [ "python", "api.py" ]