FROM cgr.dev/chainguard/node:latest-dev as build

USER root
RUN apk update && apk add \
     cairo-dev libjpeg-turbo-dev pango-dev giflib-dev \
     librsvg-dev glib-dev harfbuzz-dev fribidi-dev expat-dev libxft-dev

#Create non-root user
RUN addgroup dnmonster && adduser -D -G dnmonster dnmonster
RUN install -d -o dnmonster -g dnmonster /home/dnmonster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY ./src /usr/src/app

RUN chown -R dnmonster:dnmonster /usr/src/app
USER dnmonster

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]

FROM cgr.dev/chainguard/wolfi-base

RUN apk update && apk add tini nodejs \
     cairo-dev libjpeg-turbo-dev pango-dev giflib-dev \
     librsvg-dev glib-dev harfbuzz-dev fribidi-dev expat-dev libxft-dev

WORKDIR /app
COPY --from=build /usr/src/app /app

EXPOSE 8080
CMD [ "npm", "start" ]
