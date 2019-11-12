<?php 
// $uname = 'wangwu';
// $age = '13';
// echo '{"username":"'.$uname.'","age":"'.$age.'"}';

// json_encode()作用：就是把数组转化成json形式的字符串
// $arr = array(1,2,3);
// $arr = array("sd","asd","sda");
$arr = array("name1"=>"sd","name2"=>"asd","name3"=>"sda");
$str = json_encode($arr);
echo $str;
 ?>