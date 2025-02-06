FROM cgr.dev/chainguard/node:latest-dev AS build

USER root

RUN apk update && apk add \
    cairo-dev libjpeg-turbo-dev pango-dev giflib-dev python3 make gcc \
    librsvg-dev glib-dev harfbuzz-dev fribidi-dev expat-dev libxft-dev \
    libfontconfig1

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
CMD [ "node", "server.js" ]
