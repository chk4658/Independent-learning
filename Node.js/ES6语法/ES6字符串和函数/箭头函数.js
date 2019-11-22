/*
	箭头函数
*/
// function foo() {
// 	console.log('hello');
// }
// foo();

// let foo = () => console.log('hello');
// foo();

// 传参数时，原来的做法
// function foo(v) {
// 	return v;
// }

// let foo = v => v;
// let ret = foo(111);
// console.log(ret);

// let foo = (a,b) => console.log(a + b);
// foo(11,22);

// 多个参数时必须用小括号包住
// let foo = (a,b) => {let c = 1; console.log(a + b + c);}
// foo(11,22);

// 匿名函数时
// let arr = [123,456,789];
// arr.forEach( function(element, index) {
// 	console.log(element,index);
// });

// arr.forEach((element, index) => {
// 	console.log(element,index);
// });

// 箭头函数的注意事项
// 1、箭头函数中this取决于函数的定义，而不是调用
// function foo() {
// 	// 使用call调用foo时，这里的this其实就是call的第一个参数
// 	// console.log(this);
// 	setTimeout(() => {
// 		console.log(this.num);
// 	},100);
// }
// // foo();
// foo.call({num:1});
// -------------------------------------------------
// 2、箭头函数不可以new
// let foo = () => {this.num = 123;};
// new foo();
// -------------------------------------------------
// 3、箭头函数不可以使用arguments获取参数列表，可以使用rest代替
// let foo = (a,b) => {
// 	// console.log(a,b);
// 	console.log(arguments);这种方式获取不到实参列表
// }
// foo(123,456);
let foo = (...param) => {
	console.log(param);
}
foo(123,456)