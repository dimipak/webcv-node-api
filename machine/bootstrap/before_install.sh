#!/bin/bash

cd /home/ubuntu
sudo rm -rf app

mkdir app

cd app

touch mytestfile153.txt

#sudo aws s3 cp s3://webcv-configurations/backend/ /home/ubuntu/app -r

#docker-compose -f /home/ubuntu/app/docer-compose.yml