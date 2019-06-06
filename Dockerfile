FROM node:10.11

WORKDIR /usr/src

COPY ./package.json /usr/src/
COPY ./pipeline_inato.sh /usr/src/
COPY ./yarn.lock /usr/src/
COPY ./.babelrc /usr/src/
COPY ./.eslintrc.yml /usr/src/
COPY ./index.js /usr/src/
COPY ./pharmacy.js /usr/src/
COPY ./pharmacy.test.js /usr/src/

RUN yarn install

ENTRYPOINT ["/bin/sh", "/usr/src/pipeline_inato.sh"]
