# nodeProject

> file and code to initialize a new project

## npm i 
> npm i express, dotenv, sequelize, pg, node, cors, bunyan, joi, jsonwebtoken, sanitizer, xss, uuid

## npm i -D
> npm i -D jest, supertest
## sqitch

sqitch init mistyclic --engine=pg --top-dir=./migrations
sqitch target add target__name db:pg://user:password@server:ports/database_name
sqitch add createdb -n "create database"
