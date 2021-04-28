#!/bin/bash
DOCKER_API=box-of-shame-api

run: ## Start the containers
	docker-compose up -d

stop: ## Stop the containers
	docker-compose stop

down: ## Down the containers
	docker-compose down

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) run

build: ## Rebuilds all the containers
	docker-compose up --build -d

migration: ## Runs the migrations
	docker exec -it ${DOCKER_API} /bin/sh -c "npx sequelize-cli db:migrate"

api-logs: ## Tails the Symfony dev log
	docker logs ${DOCKER_API} -f
