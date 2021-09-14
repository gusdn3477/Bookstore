FROM node:14.17.5-alpine3.14

RUN mkdir /myapp
WORKDIR /myapp

COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src

RUN ["npm", "install"] 
RUN ["apk", "--no-cache", "add", "curl"]

EXPOSE 3000
CMD ["npm", "start"]