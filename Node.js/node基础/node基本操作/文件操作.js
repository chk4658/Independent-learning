/*
	文件操作
*/
const fs = require('fs');
// fs.stat('data.txt',(err,stat) => {
// 	// 一般回调函数的第一个参数是错误对象，如果err为null，表示没有错误，否则表示报错
// 	if(err) return;
// 	if(stat.isFile()) {
// 		console.log('文件');
// 	}
// 	console.log(stat);
// 	/*
// 	atime访问时间
// 	ctime文件的状态信息发生变化的时间（比如文件的权限）
// 	mtime文件数据发生变化的时间
// 	birthtime文件创建的时间
// 	*/
// });

// 同步操作
let ret = fs.statSync('data.txt');
console.log(ret);