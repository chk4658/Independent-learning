/*
	托管静态文件

	可以指定虚拟目录
	可以指定多个子目录作为静态资源目录
*/
const express = require('express');
const app = express();
// 实现静态资源服务
// use方法的第一个参数可以指定一个虚拟路径
let server = app.use(express.static('public'));
server.listen(3000,()=>{
	console.log('running……');
})
