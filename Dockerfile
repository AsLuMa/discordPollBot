FROM node:lts-alpine AS runtime

ENV NODE_ENV production
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./

CMD [ "npm", "start" ]