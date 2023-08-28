FROM node:alpine

# Set working directory

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install

COPY . ./


CMD ["npm", "start"]