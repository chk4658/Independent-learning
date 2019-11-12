<?php
$uname =  $_POST['username'];
$pw = $_POST['password'];
// 设置服务器响应的文件类型   mime
header("Content-Type:text/plain; charset=utf8");
if($uname == 'admin' && $pw == '123'){
	echo "登录成功";
}else {
	echo "用户名或者密码错误";
}
 ?>

