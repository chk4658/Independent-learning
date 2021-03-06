/*
	变量的解构赋值
*/
// var a = 1;
// var b = 2;
// var c = 3;

// var a = 1,b = 2, c = 3;

// 数组的解构赋值
// let [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,];
// let [a=111,b,c] = [,123,];
// console.log(a,b,c)

// 对象的解构赋值
// let {foo,bar} = {foo:'hello',bar:'hi'};
// let {foo,bar} = {bar:'hi',foo:'hello'};

// 对象属性别名(如果有了别名，那么原来的名字就无效了)
// let {foo:abc,bar} = {bar:'hi',foo:'hello'};
// console.log(abc,bar);

// 对象的解构赋值指定默认值
let {foo:abc='hello',bar} = {bar:'hi'};
console.log(abc,bar);

// let {cos,sin,random} = Math;
// console.log(typeof cos);

// 字符串的解构赋值
// let [a,b,c,d,e] = "hello";
// console.log(a,b,c,d,e);
// h e l l o

// let [a,b,c,d] = "hello";
// console.log(a,b,c,d);
// h e l l

// console.log("hello".length);

// let {length} = "hi";
// console.log(length);