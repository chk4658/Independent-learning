<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div>测试get获取数据</div>
	<div>
		<?php
		// http://192.168.0.6/php-get.php?abc=1
		// $_GET['abc']获取url地址中传递的参数的值
		$f = $_GET['abc']; 
		echo "<span>$f</span>";

		// http协议的常用请求方式：(增删改查)
		// get    用来从服务器获取数据(参数一般作为查询条件)
		// post   用来添加数据
		// put    用来修改数据
		// delete 用来删除数据
		 ?>
	</div>
</body>
</html>