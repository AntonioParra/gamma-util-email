FROM node:20
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
RUN npm install
CMD [ "node", "--env-file=.env", "server.js" ]