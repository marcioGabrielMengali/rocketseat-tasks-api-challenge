# Rocketseat Tasks api Challenge

- [Introduction](#introduction)
- [About](#about-the-project)
- [Node Version](#node-version)
- [How to run](#introduction)
    - [Install Packeges](#1-install-the-packages)
    - [Run The Server](#2-run-the-server`)
- [Routes](#routes)
    - [GET](#get)
    - [POST](#post)

## Introduction
```
Create an api to do CRUD operations for taks.
```

## About the project

### Node Version
```
>= 20
```

## How to run the project

### 1. Install the packages
```shell
npm i
```

### 2. Run the server
```shell
npm run server
```

## Routes

### Get
```shell
curl --request GET \
  --url http://localhost:3333/tasks \
  --header 'User-Agent: insomnia/10.2.0'
```

### Post
```shell
curl --request POST \
  --url http://localhost:3333/tasks \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.1.1' \
  --data '{
	"title": "fazer api",
	"description": "criar tasks api do desafio da rocketseat"
}'
```