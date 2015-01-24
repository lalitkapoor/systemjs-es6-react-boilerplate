FROM dockerfile/nodejs

ENV PORT 80

ADD ./ /sample
WORKDIR /sample

EXPOSE 80

RUN npm install
RUN ./node_modules/.bin/jspm install -y
CMD npm start
