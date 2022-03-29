FROM node:16

ENV REACT_APP_API_URL=http://localhost:4000/api

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]