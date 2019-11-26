/*
	目录操作
	1、创建目录
	fs.mkdir(path[, options], callback)
	fs.mkdirSync(path[, options])
	2、读取目录
	fs.readdir(path[, options], callback)
	fs.readdirSync(path[, options])
	3、删除目录
	fs.rmdir(path[, options], callback)
	fs.rmdirSync(path[, options])
*/
const path = require('path');
const fs = require('fs');
// 创建目录
// fs.mkdir(path.join(__dirname,'目录操作测试'), (err)=>{
// 	console.log(err);
// });

// fs.mkdirSync(path.join(__dirname,'目录操作测试'));

// ----------------------------------------------------------

// 读取目录
// fs.readdir(__dirname, (err,files)=>{
// 	files.forEach((element, index) => {
// 		fs.stat(path.join(__dirname,element),(err,stat)=>{
// 			if(stat.isFile()) {
// 				console.log(element,'文件');
// 			}else if(stat.isDirectory()) {
// 				console.log(element,'目录');
// 			}
// 		})
// 	});
// });

// let files = fs.readdirSync(__dirname);
// files.forEach((element, index) => {
// 	fs.stat(path.join(__dirname,element),(err,stat)=>{
// 		if(stat.isFile()) {
// 			console.log(element,'文件');
// 		}else if(stat.isDirectory()) {
// 			console.log(element,'目录');
// 		}
// 	})
// });

// ----------------------------------------------------------

// fs.rmdir(path.join(__dirname, '目录操作测试'), (err)=>{
// 	console.log(err);
// });

fs.rmdirSync(path.join(__dirname,'目录操作测试'));