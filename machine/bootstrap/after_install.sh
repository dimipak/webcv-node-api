#!/bin/bash

cd /home/ubuntu/app

sudo npm install

sudo export NODE_ENV=production

sudo eval 'export NODE_ENV=production'

eval 'export NODE_ENV=production'

pm2 start index.js