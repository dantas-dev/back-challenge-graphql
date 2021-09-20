FROM node:14.17.4-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install &> /dev/null 
RUN npm run build

FROM builder AS dependencies
RUN rm -r node_modules 
RUN npm install --only=production 
RUN cp -R node_modules prod_node_modules

FROM node:14.17.4-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY --from=dependencies /app/dist ./dist
COPY --from=dependencies /app/src/drivers/db/mysql ./src/drivers/db/mysql
COPY --from=dependencies /app/package.json .
COPY --from=dependencies /app/.sequelizerc .
COPY --from=dependencies /app/.env.docker ./.env
COPY --from=dependencies /app/.env.test .

CMD [ "npm", "run", "on-docker" ]