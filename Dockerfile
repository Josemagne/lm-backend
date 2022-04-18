FROM node:17-alpine3.14
WORKDIR /usr/src/app
COPY . .
RUN npm install yarn
RUN yarn install
RUN npm run build

FROM node:17-alpine3.14
WORKDIR /usr/src/app
# COPY . .
RUN npm install yarn
# RUN yarn
COPY --from=0 /usr/src/app/build ./build
COPY package.json ./package.json
RUN yarn install --production
EXPOSE 80
CMD ["npm", "run", "start"]
