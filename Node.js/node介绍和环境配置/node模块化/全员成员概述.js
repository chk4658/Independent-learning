/*
	全局成员概述
	globals
*/
// 包含文件名的全路径
console.log(__filename);
// 文件的路径(不包括文件名)
console.log(__dirname);

// 定时函数
var timer = setTimeout(function() {
	console.log(123);
},1000);

clearTimeout(timer);
// 浏览器是window,这里是globals

// argv是一个数组，默认情况下，前两项数据分别是：Node.js环境的路径，当前执行的js文件的全路径
// 从第三个参数开始表示命令行参数
console.log(process.argv);

// 打印当前系统的架构（64位或32位）
console.log(process.arch);