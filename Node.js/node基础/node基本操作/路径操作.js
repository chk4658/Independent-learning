/*
	路径操作
*/
const path = require('path');

// linux路径/   windows路径\

// 获取路径的最后一部分
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html','html'));

// 获取路径
console.log(__dirname);
console.log(path.dirname('/abc/qqq/sada/a.txt'));

// 获取扩展名
console.log(path.extname('index.html'));

// 路径的格式化处理
// path.format()  obj->string
// path.parse()  string->obj
let obj = path.parse(__filename);
console.log(obj);
// {
//   root: 'C:\\',  文件的根路径
//   dir: 'C:\\github\\Independent-learning\\Node.js\\node基础\\node基本操作',  文件的全路径
//   base: '路径操作.js',  文件的名称
//   ext: '.js',  扩展名
//   name: '路径操作'  文件名称
// }

let objpath = {
  root: 'C:\\',
  dir: 'C:\\github\\Independent-learning\\Node.js\\node基础\\node基本操作',
  base: '路径操作.js',
  ext: '.js',
  name: '路径操作'
};
let strpath = path.format(objpath);
console.log(strpath);

// 判断是否为绝对路径
console.log(path.isAbsolute('C:/foo/..'));

// 拼接路径(..表示上层路径;.表示当前路径),在连接路径的时候会格式化路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// 规范路径
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// 计算相对路径
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

// 解析路径
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// 两个特殊属性
console.log(path.delimiter);//表示路径分隔符(windows是\,linux是/)
console.log(path.sep);//环境变量分隔符(windows使用;linux使用:)