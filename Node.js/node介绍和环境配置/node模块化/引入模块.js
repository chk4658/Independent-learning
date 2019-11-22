/*
	引入模块
*/
var module = require('export.js');
// var ret = module.sum(12,13);
// console.log(ret);

var ret = module(12,13);
console.log(ret);