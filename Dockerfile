FROM nginx:alpine

COPY timer.html /usr/share/nginx/html/
COPY timer.js /usr/share/nginx/html/
COPY timer.css /usr/share/nginx/html/
COPY time.mp3 /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80