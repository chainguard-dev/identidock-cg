FROM cgr.dev/chainguard/node:latest-dev as build

USER root

RUN apk update && apk add \
     tini cairo-dev libjpeg-turbo-dev pango-dev giflib-dev \
     librsvg-dev glib-dev harfbuzz-dev fribidi-dev expat-dev libxft-dev

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV production
COPY package.json /usr/src/app/
RUN npm install
COPY ./src /usr/src/app

FROM cgr.dev/chainguard/wolfi-base

RUN apk update && apk add tini nodejs \
     cairo-dev libjpeg-turbo-dev pango-dev giflib-dev \
     librsvg-dev glib-dev harfbuzz-dev fribidi-dev expat-dev libxft-dev

WORKDIR /app
COPY --from=build /usr/src/app /app

EXPOSE 8080
ENTRYPOINT ["tini", "--" ]
CMD [ "npm", "start" ]
