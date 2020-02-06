/*
	路由(根据请求路径和请求方式进行路径分发处理)
	http的常用请求方式：
	post   添加操作
	get   查询
	put   更新
	delete  删除

	restful api（一种url的格式）
*/

const express =  require('express');
const app = express();

// app.get('',(req,res)=>{
// 	res.send('get data');
// });
// app.post('',(req,res)=>{
// 	res.send('post data');
// });
// app.put('',(req,res)=>{
// 	res.send('put data');
// });
// app.delete('',(req,res)=>{
// 	res.send('delete data');
// });

// 直接使用use方法可以处理所有的路由请求
app.use((req,res)=>{
	res.send('ok');
});

app.listen(3000,()=>{
	console.log('running...');
})