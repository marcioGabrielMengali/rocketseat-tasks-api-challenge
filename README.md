# Rocketseat Tasks api Challenge

- [Introduction](#introduction)
- [About](#about-the-project)
- [Node Version](#node-version)
- [How to run](#introduction)
  - [Install Packeges](#1-install-the-packages)
  - [Run The Server](#2-run-the-server`)
  - [Upload CSV](#3-upload-csv`)
- [Routes](#routes)
  - [GET](#get)
  - [POST](#post)
  - [PUT](#put)
  - [PATCH](#patch)
  - [DELETE](#delete)

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

### 3. upload csv

```shell
npm run upload
```

## Routes

### GET

```shell
curl --request GET \
  --url http://localhost:3333/tasks \
  --header 'User-Agent: insomnia/10.2.0'
```

### POST

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

### PUT

```shell
curl --request PUT \
  --url http://localhost:3333/tasks/fb7a5072-f161-4a21-95e0-94ad2fcb6028 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.1.1' \
  --data '{
	"title": "fazer rota de upload csv",
	"description": "criar rota de upload de CSV"
}'
```

### PATCH

```shell
curl --request PATCH \
  --url http://localhost:3333/tasks/9e33b8f7-d3e5-4188-a1eb-5635a09a587d/complete \
  --header 'User-Agent: insomnia/10.2.0'
```

### DELETE

```shell
curl --request DELETE \
  --url http://localhost:3333/tasks/a81ac897-ef33-4602-9815-e10fdb55ae04 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.1.1' \
  --data '{
	"title": "fazer rota de upload csv",
	"description": "criar rota de upload de CSV"
}'
```
