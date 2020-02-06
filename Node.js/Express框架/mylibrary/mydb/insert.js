/*
	插入数据
*/
// 加载数据库驱动
const mysql      = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器的域名或者IP地址
  user     : 'root',//登录数据库的账号
  password : '137733',//登录数据库的密码
  database : 'library'
});
// 执行连接操作
connection.connect();

let sql = 'insert into library set ?'
let data = {
	name:'明朝那些事',
	author:'当年明月',
	category:'文学',
	description:'明朝的历史'
}

// 操作数据库
connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  /*console.log(results);
  OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 8,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
  }*/
  if(results.affectedRows == 1) {
  	console.log('数据插入成功');
  }

});
// 关闭数据库
connection.end();
