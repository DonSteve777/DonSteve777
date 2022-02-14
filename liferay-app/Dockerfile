FROM node:latest as node

ARG ENV=prod
ARG APP=liferay-app

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /app
COPY ./ /app/

# Instala y construye el Angular App
RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

# Angular app construida, la vamos a hostear un server production, este es Nginx

FROM nginx:1.13.8-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf




# lo he puesto a correr pero no veo naaaa
#docker logs, y a ver si me cato de algo
