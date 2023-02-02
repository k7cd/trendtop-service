FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN tsc
RUN npm run build
# CMD [ "npm", "run", "build" ]
