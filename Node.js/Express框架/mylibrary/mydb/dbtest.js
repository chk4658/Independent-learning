/*
	测试通用api
*/
const db = require('./db.js');

// 插入操作
let sql = 'insert into library set ?';
let data = {
	name:'11',
	author:'22',
	category:'33',
	description:'44'
}
db.base(sql,data,(result)=>{
	console.log(result);
})