# for convenience get full debian docker container
FROM node:19-buster

WORKDIR /fixer

# install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# copy source code
COPY hardhat.config.js .
COPY contracts contracts
COPY scripts scripts
# build source code into dist

ENTRYPOINT npm run deploy_do_nothing_dev