FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN npm run tsc
COPY . ./
RUN npm run build
# CMD [ "npm", "run", "build" ]
