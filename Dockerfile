FROM node:8.5.0

WORKDIR /app

ADD package.json /app

EXPOSE 80

RUN npm install


