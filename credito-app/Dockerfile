# Etapa 1: build da aplicação Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servir com NGINX
FROM nginx:alpine
COPY --from=build /app/dist/credito-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
