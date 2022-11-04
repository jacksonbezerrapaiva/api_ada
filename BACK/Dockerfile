FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

ADD dist dist

RUN npm install
RUN npm install yarn

CMD [ "yarn", "start:prod" ]