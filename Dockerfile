# base image
#FROM node:8.12
FROM node:alpine

# Tell Docker about the port we'll run on.
ENV PORT 5000
EXPOSE 5000

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /tmp
COPY package.json /tmp/

RUN npm config set registry http://registry.npmjs.org/ && npm install

# Copy all local files into the image WORKDIR.
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run test 

ENTRYPOINT npm start
