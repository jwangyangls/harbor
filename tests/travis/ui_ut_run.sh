#!/bin/bash
set -x
set -e

cd ./src/portal
npm install -g -q --no-progress angular-cli
npm install -g -q --no-progress karma
npm install -q --no-progress
npm run build_hbr_echarts
npm run test && cd -
