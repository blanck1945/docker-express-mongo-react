FROM node:14-alpine

#ENV NODE_ENV=production --production --silent && mv node_modules ../

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install
RUN yarn global add ts-node-dev
RUN yarn global add typescript

COPY . .

RUN yarn build

EXPOSE 3000
EXPOSE 5000

CMD ["yarn", "start"]
