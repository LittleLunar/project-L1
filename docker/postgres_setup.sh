#! /bin/bash

source .env

docker run --name pg -e POSTGRES_USER=$USER -e POSTGRES_PASSWORD=$PASS -p $EXPOSE_PORT:$POSTGRES_DEFAULT_PORT -d postgres:alpine