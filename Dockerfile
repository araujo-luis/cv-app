FROM node:16-alpine as build
WORKDIR /app
COPY ./package*.json .env ./
COPY src/ ./src
COPY public/ ./public
RUN npm install && npm run build

FROM nginx:latest as prod
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/
COPY luisaraujo_io_bundle.crt luisaraujo_io.pem /etc/ssl/



