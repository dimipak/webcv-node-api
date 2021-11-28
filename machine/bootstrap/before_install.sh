#!/bin/bash

cd /home/ubuntu/app

pm2 stop index.js

pm2 delete index.js

cd ../

sudo rm -rf app

mkdir app

sudo aws s3 cp s3://webcv-configurations/backend/.env.production /home/ubuntu/app/.env.production

export NODE_ENV=production