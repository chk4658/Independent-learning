<?php 
$uname = $_POST['username'];
$pw = $_POST['password'];

// if($uname == 'admin' && $pw == '123') {
// 	echo "登陆成功";
// }

// 中间可以写js
if($uname == 'admin' && $pw == '123') {
 ?>
 <script type="text/javascript">
 	parent.document.getElementById('info').innerHTML = '登陆成功';
 </script>
<?php } ?>