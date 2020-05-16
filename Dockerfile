FROM nginx:latest
COPY ./build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/
COPY luisaraujo_io_bundle.crt /etc/ssl/
COPY luisaraujo_io.pem /etc/ssl/

