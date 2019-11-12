<?php 
header("Content-Type:text/xml;");
// 这里设置响应头信息,保证浏览器可以把相应内容识别为xml文件类型
// php开发xml

$arr = array();
$arr[0] = array("name"=>"三国演义","author"=>"罗贯中","desc"=>"四大名著之一" );
$arr[1] = array("name"=>"水浒传","author"=>"施耐庵","desc"=>"四大名著之一" );
 ?>
<?xml version="1.0" encoding="utf-8" ?>
<booklist>
	<book>
		<name><?php echo $arr[0]['name']; ?></name>
		<author><?php echo $arr[0]['author']; ?></author>
		<desc><?php echo $arr[0]['desc']; ?></desc>
	</book>
	<book>
		<name><?php echo $arr[1]['name']; ?></name>
		<author><?php echo $arr[1]['author']; ?></author>
		<desc><?php echo $arr[1]['desc']; ?></desc>
	</book>
</booklist>