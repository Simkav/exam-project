FROM node:14.16.1-alpine3.13

ARG NODE_ENV="development"

RUN mkdir /server \
  && mkdir -p /var/www/html/images

WORKDIR /server

COPY package*.json ./

RUN npm install -g nodemon\
  && npm install -g sequelize-cli\
  && npm install

COPY . .

EXPOSE 3000

CMD npm start