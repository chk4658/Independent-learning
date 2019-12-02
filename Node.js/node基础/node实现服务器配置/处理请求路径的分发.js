/*
	处理请求路径的分发
	1、req对象是Class: http.IncomingMessage的实例对象
	2、res对象是Class: http.ServerResponse的实例对象
*/
const http = require('http');
http.createServer((req,res)=>{
	// write向客户端响应内容，没有换行，可以写多次
	res.write('hi');
	res.write('hello');
	// req.url可以获取URL中的路径（端口之后的部分）
	// end方法用来完成响应，只能执行一次
	res.end(req.url);
}).listen(3000,'192.168.0.6',()=>{
	console.log('running');
});