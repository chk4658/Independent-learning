## FileReader复制文本文件

### 一次读取一个字符复制文本文件

```java
public static void main(String[] args) throws IOException {
	FileWriter fw = new FileWriter("C:\\Users\\Administrator\\Desktop\\github\\a.txt");
	FileReader fr = new FileReader("C:\\Eclipse\\workspace\\text\\src\\com\\text001\\Student.java");
	int ch;
	while((ch = fr.read()) != -1){
		fw.write(ch);
	}
	fw.close();
	fr.close();
}
```

一次读取一个字符数组复制文本文件

```java
public static void main(String[] args) throws IOException {
	FileWriter fw = new FileWriter("C:\\Users\\Administrator\\Desktop\\github\\a.txt");
	FileReader fr = new FileReader("C:\\Eclipse\\workspace\\text\\src\\com\\text001\\Student.java");
	char[] chs = new char[1024];
	int len;
	while((len = fr.read(chs)) != -1){
		fw.write(chs, 0, len);
	}
	fw.close();
	fr.close();
}
```

