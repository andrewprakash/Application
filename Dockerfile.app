FROM node:8.5.0

WORKDIR /app

ADD package.json /app

EXPOSE 3000

RUN npm install


