#!/bin/bash

cd /home/ubuntu || exit

sudo rm -rf app

mkdir app

cd app || exit

sudo aws s3 cp s3://webcv-configurations/backend/ /home/ubuntu/app --recursive