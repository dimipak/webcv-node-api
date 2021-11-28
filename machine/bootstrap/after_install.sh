#!/bin/bash

cd /home/ubuntu/app

sudo npm install

export NODE_ENV=production

pm2 start index.js