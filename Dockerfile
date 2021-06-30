FROM node:14.17.1-alpine3.13

ENV PORT=3000

WORKDIR /home/app

COPY package.json .

RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production && \
    npm cache clean

COPY . .
EXPOSE 3000
CMD npm start