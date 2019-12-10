/**
 * this file is needed to build harbor-echarts
 * 1. run "node node_modules/echarts/build/build.js --min -i harbor-echarts.build.js -o node_modules/echarts/dist/harbor-echarts.min.js"
 * to generate harbor-echarts.min.js
 * 2. import harbor-echarts.min.js in angular.js
 */
export * from 'echarts/src/echarts';

// only import needed parts
import 'echarts/src/chart/pie';
import 'echarts/src/chart/bar';
