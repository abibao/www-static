FROM mhart/alpine-node:5.5

MAINTAINER Gilles Perreymond <gperreymond@gmail.com>

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
COPY src/index.js /usr/app/
ADD src/www /usr/app/www

RUN apk add --update make gcc g++ python && \
  npm install --production && \
  npm uninstall -g npm && \
  apk del make gcc g++ python && \
  rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

EXPOSE 80
CMD node .
