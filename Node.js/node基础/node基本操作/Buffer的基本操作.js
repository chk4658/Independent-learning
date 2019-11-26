/*
	Buffer的基本操作
	Buffer本质上就是字节数组
	1、构造方法（类）
	2、静态方法
	3、实例方法

	Buffer对象是Node处理二进制数据的一个接口，它是Node原生提供的全局对象，可以直接使用，不需要require('buffer')
*/

// 实例化
	// Buffer.from(array)
	// Buffer.from(string)
	// Buffer.alloc(size)
// ======================================
// 实例化buf对象
// let buf = Buffer.alloc(5);
// console.log(buf);

// let buf = Buffer.from('hello');
// console.log(buf);

// let buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf.toString());

// -----------------------------------------------------------

// 功能方法
	// Buffer.isEncoding()判断是否支持该编码
	// Buffer.isBuffer()判断是否为Buffer
	// Buffer.byteLength()返回指定编码的字节长度，默认utf8
	// Buffer.concat()将一组Buffer对象合并为一个Buffer对象
// ======================================
// 静态方法
// console.log(Buffer.isEncoding('utf8'));
// console.log(Buffer.isEncoding('gbk'));

// let buf = Buffer.from('hello');
// console.log(Buffer.isBuffer(buf));

// let buf = Buffer.from('中国','ascii');
// console.log(Buffer.byteLength(buf));
// console.log(buf.toString());

// let buf1 = Buffer.alloc(3);
// let buf2 = Buffer.alloc(5);
// let buf3 = Buffer.concat([buf1,buf2]);
// console.log(Buffer.byteLength(buf3));

// let buf1 = Buffer.from('hi');
// let buf2 = Buffer.from('sss');
// let buf3 = Buffer.concat([buf1,buf2]);
// console.log(Buffer.byteLength(buf3));
// console.log(buf3.toString());

// -----------------------------------------------------------

// 实例方法
	// write()向buffer对象中写入内容
	// slice()截取新的buffer对象
	// toString()把buf对象转成字符串
	// toJSON()把buf对象转成json形式的字符串
// ======================================
// let buf = Buffer.alloc(5);
// buf.write('hello');
// buf.write('hello',2);
// 第三个参数表示写入的长度
// buf.write('hello',2,2);
// console.log(buf);

// let buf = Buffer.from('hello');
// let buf1 = buf.slice();
// let buf1 = buf.slice(2);
// 第二个参数表示索引
// let buf1 = buf.slice(2,3);
// console.log(buf1.toString());

// toJSON()方法不需要显式调用，当JSON.stringify()调用的时候会自动调用toJSON方法
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log(json);