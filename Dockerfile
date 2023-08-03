FROM node:18
COPY ./ ./tracker
WORKDIR /tracker/src
RUN npm install && npm install -g nodemon
CMD ["nodemon", "./server.js", "-L"]
EXPOSE 5000