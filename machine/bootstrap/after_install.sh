#!/bin/bash

cd /home/ubuntu/app

sudo npm install

pm2 start index.js
