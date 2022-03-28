FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

COPY --chown=node:node . .

USER node

RUN yarn build

FROM nginx:latest

COPY --from=build /usr/src/app/dist/fed-cnab /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
