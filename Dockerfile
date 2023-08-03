FROM node:18
COPY ./ ./tracker
WORKDIR /tracker/src
RUN npm install
CMD ["node", "./server.js"]
EXPOSE 5000