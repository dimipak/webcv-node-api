#!/bin/bash

appDir=/home/ubuntu/app

if test ! -d "$appDir"; then
  mkdir app
else
  cd /home/ubuntu/app
  file=docker-compose.yml

  if test -f "$file"; then
    docker-compose down
  fi

fi

sudo rm -rf app

mkdir app

cd app

sudo aws s3 cp s3://webcv-configurations/backend/ /home/ubuntu/app --recursive