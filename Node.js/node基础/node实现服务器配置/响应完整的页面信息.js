/*
	响应完整的页面信息
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime.json');

// // 根据路径读取文件的内容，并且响应到浏览器 
// let readFile = (name,res)=>{
// 	fs.readFile(path.join(__dirname,'www',name),'utf8',(err,fileContent)=>{
// 		if(err) {
// 			res.end('server error');
// 		}else{
// 			res.end(fileContent);
// 		}
// 	});
// }
// http.createServer((req,res)=>{
// 	// 处理路径的分发
// 	if(req.url.startsWith('/index')){
// 		readFile('index.html',res);
// 	}else if (req.url.startsWith('/about')) {
// 		readFile('about.html',res);
// 	}else if (req.url.startsWith('/list')) {
// 		readFile('list.html',res);
// 	}else {
// 		// writeHead用来设置响应类型和编码
// 		res.writeHead(200,{
// 			'Content-Type':'text/plain;charset=utf8'
// 		})
// 		res.end('出错了');
// 	}
// }).listen(3000,'192.168.0.6',()=>{
// 	console.log('running');
// });

http.createServer((req,res)=>{
	fs.readFile(path.join(__dirname,'www',req.url),(err,fileContent)=>{
		if(err) {
			res.writeHead(404,{
				'Content-Type':'text/plain;charset=utf8'
			})
			res.end('找不到');
		}else{
			let dtype = 'text/html';
			// 获取请求文件的后缀
			let ext = path.extname(req.url);
			if(mime[ext]) {
				dtype = mime[ext];
			}
			if(dtype.startsWith('text')) {
				dtype += ';charset=utf8'
			}
			res.writeHead(200,{
				'Content-Type':dtype
			})
			res.end(fileContent);
		}
	})
}).listen(3000,'192.168.0.6',()=>{
	console.log('running')
})