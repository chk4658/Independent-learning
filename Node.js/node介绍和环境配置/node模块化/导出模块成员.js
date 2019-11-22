/*
	模块化开发

	传统非模块化开发有如下的缺点：
	1、命名冲突
	2、文件依赖

	前端标准的模块化规范：
	1、AMD - requirejs
	2、CMD - seajs

	服务器端的模块化规范：
	1、CommonJS - Node.js

	模块化相关的规则：
	1、如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立
	2、模块成员的导出和引入
*/
var sum = function(a,b) {
	return parseInt(a) + parseInt(b);
}
// 导出模块成员
// exports.sum = sum;

// 导出成员的另一种方式
module.exports = sum;