server {
  listen 80;
  server_name librimem.com www.librimem.com;

  location /.well-known/acme-challenge {
    root /var/www/certbot;
  }

  location / {
    return 301 https://$host$request uri;
  }
}

server {
  listen 442 ssl;
  server_name librimem.com;

  ssl_certificate /etc/letsencrypt/live/examle.org/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.org/privkey.pem;

  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  

  location / {
    proxy_pass http://librimem.com; 
  }
}
