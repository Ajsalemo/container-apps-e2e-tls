# for base, see  https://docs.docker.com/guides/frameworks/laravel/development-setup/
FROM node:22.0.0-bookworm AS base
# Set the working directory
WORKDIR /app
COPY package*.json vite.config.js ./
RUN npm i
COPY . .
RUN npm run build

# Install laravel dependencies
FROM composer:2.8.8 AS build
# Set the working directory
WORKDIR /app
COPY --from=base /app .
RUN composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction

FROM php:8.3.21-fpm-bookworm
RUN apt update -y \
    && apt install nginx supervisor -y \
    && mkdir -p /var/log/php-fpm/
# Set the working directory
WORKDIR /var/www/html
COPY --from=build /app .
COPY --from=build /app/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY --from=build /app/default /etc/nginx/sites-enabled/default
COPY --from=build /app/entrypoint.sh /usr/local/bin/entrypoint.sh

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log \
    && chmod +x /usr/local/bin/entrypoint.sh \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]