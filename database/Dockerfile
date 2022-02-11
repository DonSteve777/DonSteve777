FROM mysql:8.0
#crea la carpeta que contiene los archivos necesarios para que funcione la aplicacion
WORKDIR /appMYSQL      

COPY package*.json ./             
                               
RUN  npm install  
#npm i express
COPY . .
    #copia todo al  WORKDIR          


# a saber que version mete

CMD ["node", "build/index.js"]
#CMD ["node", "build/index.js"]

