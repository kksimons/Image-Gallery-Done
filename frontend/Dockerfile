FROM node:19.7-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./ 
#npm executable, start parameter for the exec
CMD [ "npm", "start" ]