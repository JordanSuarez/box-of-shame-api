# BOX-OF_SHAME

## Requirements
- Docker (https://docs.docker.com/install/)
- Docker Compose (https://docs.docker.com/compose/install/)

## Install process
- `cp .env.dist .env`
- `make build` (only the first time)
- `make migration`

## Usage
- `make build` to build the docker environment
- `make run` to run the docker environment
- `make stop` to stop the docker environment
- `make down` to down the docker environment
- `make restart` to stop and start containers
- `make api-logs` to display dev logs in shell
- `make migration` to run sequelize migration

### Swagger
* http://localhost:3000/api-docs to check the Swagger documentation

### Postman
* Get Postman collection: https://www.getpostman.com/collections/6f895c66fa2027e65e0c
* Get Postman environment variables: `./postman/postman_environment.json`
