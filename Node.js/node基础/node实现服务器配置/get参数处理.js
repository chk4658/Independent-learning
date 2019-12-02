/*
	get参数处理
*/
const url = require('url');
let str = "http://www.baidu.com/abc?flag=123&keyword=java";
let ret = url.parse(str);
console.log(ret);
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?flag=123&keyword=java',
//   query: 'flag=123&keyword=java',
//   pathname: '/abc',
//   path: '/abc?flag=123&keyword=java',
//   href: 'http://www.baidu.com/abc?flag=123&keyword=java'
// }

let ret1 = url.parse(str,true);
console.log(ret1.query);
// [Object: null prototype] { flag: '123', keyword: 'java' }

let obj = {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?flag=123&keyword=java',
  query: 'flag=123&keyword=java',
  pathname: '/abc',
  path: '/abc?flag=123&keyword=java',
  href: 'http://www.baidu.com/abc?flag=123&keyword=java'
};
let ret2 = url.format(obj);
console.log(ret2);