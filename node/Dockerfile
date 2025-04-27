FROM node:23.11.0-alpine3.20 AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package-lock.json package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

FROM build AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 3443

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ] 