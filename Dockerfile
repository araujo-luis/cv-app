FROM node:latest as build-app
WORKDIR /cv-app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build-app /cv-app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
COPY luisaraujo_io_bundle.crt /etc/ssl/
COPY luisaraujo_io.pem /etc/ssl/

