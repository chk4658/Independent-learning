/*
	写文件操作
*/

const fs = require('fs');
const path = require('path');

let strpath = path.join(__dirname,'data.txt');

// fs.writeFile(strpath, 'Hello Node.js', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// let buf = Buffer.from('Hello Node.js');
// fs.writeFile(strpath, buf, 'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// 同步操作
fs.writeFileSync(strpath, 'sjak');