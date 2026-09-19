FROM php:8.3-apache
RUN php -r "exit(extension_loaded('curl') && extension_loaded('openssl') ? 0 : 1);"
COPY dist/ /var/www/html/
COPY railway-start.sh /usr/local/bin/fulab-start
RUN mkdir -p /var/www/fulab-private && chown www-data:www-data /var/www/fulab-private \
    && chmod 700 /var/www/fulab-private && chmod +x /usr/local/bin/fulab-start
CMD ["/usr/local/bin/fulab-start"]
