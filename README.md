# 👾 Back-End challenge - Graphql API

## Getting started
To get started: 
1) yarn install.
2) create database in Docker, with command:
docker run -d --name mysql -e ALLOW_EMPTY_PASSWORD=yes -e MYSQL_PASSWORD=12345 -e MYSQL_USER=root -e MYSQL_DATABASE=graph -p 3306:3306 bitnami/mysql:latest
3) Run the project with command: yarn dev:server

## How did you decide which technologies to use as part of your solution
- I chose the technologies based on what I'm most familiar. Then case, i choose TypeOrm as ORM and Mysql as SGBD.
## Are there any improvements you could make to your submission
- Yes. As I knew very little about graphql. I would study the documentation more and make a better implementation
## What would you do differently if you were allocated more time
- I would study more about graphql to improve the routes and structure of the application.
