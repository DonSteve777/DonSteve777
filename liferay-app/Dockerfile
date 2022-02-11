FROM node:16.14-alpine
#crea la carpeta que contiene los archivos necesarios para que funcione la aplicacion
RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm cache clean --force
RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx
COPY --from=build-step /app/dist /usr/share/nginx/html
#RUN npm run build --prod
  #instala las dependencias del package.json

#CMD ng serve --host 0.0.0.0 --disable
#RUN npm run build --prod
#CMD ["ng", "serve"]
#CMD ["node", "build/index.js"]
#CMD ng serve

