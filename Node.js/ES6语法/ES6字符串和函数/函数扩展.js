/*
	函数扩展
	1、参数默认值
	2、参数解构赋值
	3、rest参数
	4、...扩展运算符
*/

// 参数默认值处理
// function foo(param) {
// 	let p = param || 'hello';
// 	console.log(p);
// }
// foo();

// function foo(param = 'nihao') {
// 	console.log(param);
// }
// foo();

// --------------------------------------

// function foo(uname='lisi',age=12) {
// 	console.log(uname,age);
// }
// // foo('zhangsna',13);
// foo();

// 参数解构赋值
// function foo({uname='lisi',age=12}={}) {
// 	console.log(uname,age);
// }
// // foo();
// foo({uname:'zhangsan',age:15});

// --------------------------------------

// rest参数(剩余参数)
// function foo(a,...param) {
// 	console.log(a,param);
// }
// foo(1,2,3);

// 扩展运算符...
// function foo(a,b,c,d,e) {
// 	console.log(a + b + c + d + e);
// }
// // foo(1,2,3,4,5);
// let arr = [1,2,3,4,5];
// // foo.apply(null,arr);

// foo(...arr);

// 合并数组应用
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3);