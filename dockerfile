FROM node:dubnium-alpine

EXPOSE 9000

WORKDIR /usr/src/app

RUN apk update && apk upgrade && apk add git

COPY . .

RUN yarn global add npm@6.4.1 && npm install

CMD ["npm", "start"]

