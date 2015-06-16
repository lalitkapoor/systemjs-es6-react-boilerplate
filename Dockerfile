FROM dockerfile/nodejs

ENV PORT 80

ADD ./ /sample
WORKDIR /sample

EXPOSE 80

RUN npm install --unsafe-perm
CMD npm start
