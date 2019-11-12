## 常用API

#### API概述

Application Programming Interface   应用程序编程接口

很多时候也叫它帮助文档

- 看包
- 看类的描述
- 看构造方法
- 看成员方法
  - 调用方法：
    - 看返回值类型
    - 看方法名
    - 看形式参数

示例：

Scanner：用于获取键盘录入的数据（基本数据类型，字符串数据）

![QQ图片20190829232540](C:\Users\Administrator\Desktop\github\Foundation-Studies-java\images\QQ图片20190829232540.png)

```java
public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	System.out.println("请输入一个字符串数据：");
	String s = sc.nextLine();
	System.out.println("s:"+s);
}
```

可得nextline是获取字符串数据

#### String类的概述及构造方法

- String类概述
  - 字符串是由多个字符组成的一串数据
  - 字符串可以看成是字符数组
- 构造方法：
  - `String(String original)`把字符串数据封装成字符串对象
  - `String(char[] value)`把字符数组的数据封装成字符串对象
  - `String(char[] value, int index, int count)`把字符数组中的一部分数据封装成字符串对象

java程序所有的字符串字面值都作为此类的实例实现

即字符串是一种比较特殊的引用数据类型，直接输出字符串对象输出的是该对象中的数据，而不是地址值

#### 构造方法创建的和直接赋值方式创建的字符串对象  区别

==：

- 基本数据类型：比较的基本数据类型的值
- 引用数据类型：比较的是引用数据类型的地址值

```java
	public static void main(String[] args) {
		String s1 = new String("hello");
		String s2 = "hello";
		
		System.out.println("s1:"+s1);
		System.out.println("s2:"+s2);
		
		System.out.println("s1==s2:"+(s1==s2)); //false
		
		String s3 = "hello";
		System.out.println("s1==s3:"+(s1==s3)); //false
		System.out.println("s2==s3:"+(s2==s3)); //true
	}
```

字符串的内容是存储在方法区的常量池里面的，是为了方便字符串的重复使用

结论：

- 直接赋值方式，字符串对象是在栈内存
- 构造方法方式，字符串对象是在堆内存

#### String类的成员方法

- String类的判断功能
  - `boolean equals(Object obj)`:比较字符串的内容是否相同---Object:是类层次结构中的根类，所有的类都直接或者间接的继承自该类。如果一个方法的形式参数是Object，那么这里我们就可以传递它的任意的子类对象。
  - `boolean equalsIgnoreCase(String str)`:比较字符串的内容是否相同,忽略大小写
  - `boolean startsWith(String str)`:判断字符串对象是否以指定的str开头
  - `boolean endsWith(String str)`:判断字符串对象是否以指定的str结尾
  - ……
- String类的获取功能
  - `int length()`:获取字符串的长度，其实也就是字符个数
  - `char charAt(int index)`:获取指定索引处的字符
  - `int indexOf(String str)`:获取str在字符串对象中第一次出现的索引，没有就显示-1
  - `String substring(int start)`:从start开始截取字符串
  - `String substring(int start,int end)`:从start开始，到end结束截取字符串。包括start，不包括end
  - ……
- String类的随机功能
  - `char[] toCharArray()`:把字符串转换为字符数组
  - `String toLowerCase()`:把字符串转换为小写字符串
  - `String toUpperCase()`:把字符串转换为大写字符串
- String类的其他功能
  - `String trim()`：去除字符串  两端  空格
  - `String[] split(String str)`：按照指定符号分割字符串

```java
        String s = "aa,bb,cc";
		String[] strArray = s.split(",");
		for(int x=0; x<strArray.length; x++) {
			System.out.println(strArray[x]);
		}
```

