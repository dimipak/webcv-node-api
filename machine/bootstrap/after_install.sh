#!/bin/bash

cd /home/ubuntu/app

sudo npm install

sudo export NODE_ENV=production

pm2 start index.js