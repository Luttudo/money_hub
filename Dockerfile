FROM node:14

WORKDIR C:\3Faculdade\Projetos\money_hub

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]