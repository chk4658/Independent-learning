<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>php page</div>
    <?php
    // echo的作用是向页面中输出字符串
    echo '<div>hello world!</div>';

    // php中的变量声明$
    $num = 1234;

    // php拼接字符串用的是.
    echo '<div>编号：'.$num.'</div>';

    // 单引号会把其中的变量当作普通的字符串处理
    // 双引号对于其中的变量会把其解析成变量值
    echo '<div>编号：$num</div>';
    echo "<div>编号：$num</div>";

    // 数组的使用
    $arr = array("hello", 1, "sda");
    print_r($arr);//Array ( [0] => hello [1] => 1 [2] => sda )
    echo "<br>";
    $arr1 = array("username"=>"zhangsan","age"=>"12","sex"=>'male');
    print_r($arr1);//Array ( [username] => zhangsan [age] => 12 [sex] => male )
    var_dump($arr1);
    /*array (size=3)
      'username' => string 'zhangsan' (length=8)
      'age' => string '12' (length=2)
      'sex' => string 'male' (length=4)*/

    // php当中的函数  函数中的名字是不区分大小写的 
    // 自定义函数
    function foo($info) {
        return $info;
    }
    $ret = foo('hi');
    echo $ret;
    echo "<br>";

    // 系统函数
    $rrr = json_encode($arr);
    echo $rrr;//["hello",1,"sda"]
    echo "<br>";
    $ttt = json_encode($arr1);
    echo $ttt;//{"username":"zhangsan","age":"12","sex":"male"} 
     ?>
</body>
</html>