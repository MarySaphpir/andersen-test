FROM node
RUN mkdir -p /usr/src/applicaion
WORKDIR /usr/src/applicaion
COPY package.json /usr/src/applicaion
COPY package.json ./package.json

RUN npm install
COPY . /usr/src/applicaion
EXPOSE 4202
CMD ["npm", "start"]
