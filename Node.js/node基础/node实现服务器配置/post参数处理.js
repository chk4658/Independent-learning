/*
	post参数处理
*/
const querystring = require('querystring');
let param = 'username=zhangsan&password=123';

// parse方法的作用就是把字符串转成对象
let obj = querystring.parse(param);
console.log(obj);

let obj1 = {
	flag:'123',
	abc:['hello','hi']
}
// stringify把对象转成字符串
let str1 = querystring.stringify(obj1);
console.log(str1);