FROM dockerfile/nodejs

ENV PORT 80

ADD ./ /sample
WORKDIR /sample

EXPOSE 80

RUN npm install
CMD npm start
