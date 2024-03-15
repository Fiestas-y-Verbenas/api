# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en la carpeta de la aplicación dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto 3000 en el contenedor
EXPOSE 3010

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "app.js"]
