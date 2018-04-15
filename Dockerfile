FROM node:9

WORKDIR /home/node/app

## Create directories for future use and set right, otherwise the build fails
RUN mkdir /home/node/.npm-global ; \
   chown -R node:node /home/node/app ; \
   chown -R node:node /home/node/.npm-global
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

## This user has now all required rights
USER node

## Dependencies
COPY package.json ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm i

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN mkdir ./ng-app && cp -R ./node_modules ./ng-app

## App
WORKDIR ./ng-app
COPY . .

RUN npm i -g @angular/cli@1.7.3

EXPOSE 4200

CMD [ "npm", "start" ]