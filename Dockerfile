# Etapa 1: Build de la aplicación Angular
FROM node:20 AS build

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto Angular
COPY package*.json ./
RUN npm install

COPY . .

# Construir la aplicación en modo de producción
RUN npm run build -- --output-path=dist/app --configuration production

# Etapa 2: Servir la aplicación Angular
FROM nginx:1.25

# Copiar los archivos construidos desde la etapa de build
COPY --from=build /app/dist/app/browser /usr/share/nginx/html

# Configurar NGINX para usar el puerto 5003
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 5003
EXPOSE 5003

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
