# StringBuilder概述及常用方法

## StringBuilder类的概述及其构造方法

- StringBuilder类概述
  - 如果对字符串进行拼接操作，每次拼接，都会构造一个新的String对象，既耗时，又浪费空间。基于此，可以使用StringBuilder
  - StringBuilder是一个可变的字符串，字符串缓冲区类
- String和StringBuilder的区别
  - String的内容是固定的，后者内容是可变的
- 构造方法
  - `StringBuilder()`，引用直接输出是内容而不是地址
- 成员方法
  - `public int capacity()`:返回当前容量--容量指的固定的大小
  - `public int length()`:返回长度（字符数）--长度是实际的大小
- 添加功能
  - `public StringBuilder append(任意类型)`:添加数据，并返回自身对象
- 反转功能
  - `public StringBuilder reverse()`

## String和StringBuilder相互转换

- StringBuilder-->String

  - `public String toString()`:通过toString()就可以实现把StringBuilder转成String
  

```java
        StringBuilder sb = new StringBuilder();
		sb.append("hello").append("world");
		String s = sb.toString();
		System.out.println(s);
```

- String-->StringBuilder
  - `StringBuilder(String str)`:通过构造方法就可以实现把String转成StringBuilder

```java
        String s = "helloworld";
		StringBuilder sb = new StringBuilder(s);
		System.out.println(sb);
```

