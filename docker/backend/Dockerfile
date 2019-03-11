FROM mileschou/phalcon:7.2-fpm-alpine


RUN apk --no-cache update \
    && apk --no-cache add libxml2-dev php7-mysqli \
    && docker-php-ext-install xml soap mysqli pdo pdo_mysql
