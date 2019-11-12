# IO流概述和分类

- IO流用来处理设备之间的数据传输
  - 文件复制，上传文件和下载文件
- IO流分类
  - 输出流`FileWriter`
  - 输入流`FileReader`

## 输出流写数据

`FileWriter(String fileName)`:传递一个文件名称

步骤：

- 创建输出流对象
- 调用输出流对象的写数据的方法，并刷新缓冲区
- 释放资源

```java
public static void main(String[] args) throws IOException {
	FileWriter fw  = new FileWriter("C:\\Users\\Administrator\\Desktop\\github\\a.txt");
	fw.write("写入数据");
	fw.flush();
	fw.close();
}
```

注意：代码中\有转义的意思，所以用\ \

`close()`和`flush()`的区别

- `flush()`刷新缓冲区，流对象还可以继续使用
- `close()`先刷新缓冲区，然后通知系统释放资源

#### `FileWriter`写数据的方法

- `void write(String str`):写一个字符串数据
- `void write(String str,int index,int len)`:写一个字符串中的一部分数据
- `void write(int ch)`:写一个字符数据，这里写int类型的好处是既可以写char类型的数据，也可以写char对应的int类型的值。'a'，97
- `void write(char[] chs)`:写一个字符数组数据
-  `void write(char[] chs,int index,int len)`:写一个字符数组的一部分数据

#### `FileWriter`写数据的常见问题

- 数据的换行
  - \n可以实现换行，但是windows系统自带的记事本打开并没有换行-----因为windows识别的换行不是\n，而是\r\n
- 数据的追加写入
  - `FileWriter(String fileName, boolean append)`根据给定的文件名以及指示是否附加写入数据的boolean值来构造FileWriter对象

## 输入流读数据

`FileReader(String fileName)`:传递文件名称

步骤：

- 创建输入流对象
- 调用输入流对象的读数据方法
- 释放资源

如果找不到文件，`java.io.FileNotFoundException: fr.txt (系统找不到指定的文件。)`

```java
public static void main(String[] args) throws IOException {
	FileReader fr = new FileReader("C:\\Users\\Administrator\\Desktop\\github\\a.txt");
	int ch = fr.read();
	System.out.println(ch);
}
```

- `int read()`:一次读取一个字符
  - 当读不到的时候ch就返回-1
- `int read(char[] cbuf)`：一次读取一个字符数组的数据，返回的是实际读取的字符个数
  - 当读不到的时候ch就返回-1