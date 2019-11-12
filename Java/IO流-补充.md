# IO流-补充

### File

文件和目录路径名的抽象表示形式，File 类的实例是不可变的

##### 构造方法

- `File(File parent, String child)` 根据指定的父路径对象和文件路径创建File对象
- `File(String pathname)` 将指定的路径名转换成一个File对象
- `File(String parent, String child)` 根据指定的父路径和文件路径创建File对象

##### 常用功能

- 创建功能

  - `boolean createNewFile()`  当指定文件不存在时创建文件并返回true，否则返回false
  - `boolean mkdir()`  当指定文件夹不存在时创建文件夹并返回true，否则返回false

  ```java
  File f3 = new File("b");
  System.out.println(f3.mkdir());
  ```

  - `boolean mkdirs()`  创建指定文件夹，当文件夹所在的目录不存在，则顺道一块创建了

  ```java
  File f4 = new File("c\\d\\e");
  System.out.println(f4.mkdirs());
  ```

- 删除功能

  - `boolean delete()` 当指定的文件或文件夹存在时删除文件或者文件夹 并返回true，否则返回false

- 获取功能

  - `File getAbsoluteFile()`  以File对象的形式返回当前File对象所指向的绝对路径
- `String getAbsolutePath()` 返回File对象所指向的绝对路径
  
  - `String getName()`  获取文件和文件夹的名称
- `String getParent()`  返回父路径字符串形式
  
  - `File getParentFile()` 返回父路径文件形式
- `String getPath()`返回创建File对象时给的路径
  
  - `long lastModified()` 以毫秒值的形式返回最后修改时间
- `long length()`  返回文件的字节数
  
- 判断功能

  - `boolean exists()`  判断文件或者文件夹是否存在，如果存在则返回true，否则返回false
  - `boolean isAbsolute()`  判断File对象指向的路径是否是绝对路径，如果是绝对路径则返回true，否则返回false
  - `boolean isDirectory()` 判断File对象指向的路径是否是文件夹，如果是则返回true，否则返回false
  - `boolean isFile()`  判断File对象指向的路径是否是文件，如果是则返回true，否则返回false
  - `boolean isHidden()`  判断File对象指向的路径是否有隐藏属性，如果隐藏了则返回true，否则返回false

- 修改文件名

  - `boolean renameTo(File dest)`  将当前File对象所指向的路径 修改为 指定File所指向的路径，修改的文件路径不能存在，如果存在则修改失败

`String[] list()`返回当前路径下所有的文件和文件夹名称（只有指向文件夹的File对象才可以调用该方法）

`File[] listFiles()`返回当前路径下所有的文件和文件夹（显示绝对路径）

`static File[] listRoots()`返回的是所有盘符

##### 案例

```java
/*输出指定目录下所有的java文件名(包括子目录)*/
public class Text {
	public static void main(String[] args) {
		File f = new File("C:\\Eclipse\\workspace");
		show(f);
	}
	public static void show(File f){
		File[] ff = f.listFiles();
		for (File file : ff) {
			if(file.isFile()){
				String s = file.getName();
				if(s.endsWith(".java")){
					System.out.println(s);
				}
			}else {
				show(file);
			}
		}
	}
}

```

### IO流分类

- 流向
  - 输入流	读取数据	FileReader	Reader
  - 输出流	写出数据	FileWriter	Writer
- 数据类型
  - 字节流
    - 字节输入流		读取数据	InputStream
    - 字节输出流		写出数据	OutputStream
  - 字符流
    - 字符输入流		读取数据	Reader
    - 字符输出流		写出数据	Writer

二进制文件只能使用字节流进行复制（使用windows自带记事本打开读不懂的）

文本文件的复制即可使用字符流，也可以使用字节流

### 标准输入输出流

###### `public static final InputStream in`  字节输入流，用来读取键盘录入的数据

`InputStream`引用数据类型

`InputStream is = System.in;`

###### `public static final PrintStream out` 字节输出流，将数据输出到命令行

`System.out.println();`

标准输出流是一个字节输出流，所以只能输出字节或者字节数组

要想通过标准输出流输出字符串，把标准输出流转换成一种字符输出流即可，`OutputStreamWriter`

`OutputStreamWriter`是字符流通向字节流的桥梁

`Writer w = new OutputStreamWriter(System.out);`字节转字符

`InputStreamReader`转换流，字节输入转换成字符输入流

### 打印流

- `PrintStream`
- `PrintWriter`
  - 打印流能输出不能输入
  - 可以自动换行（和系统无关）`println()`
  - 不能输出字节，但是可以输出其他任意类型
  - 通过某些配置，可以实现自动刷新（只有在调用println、printf或format才有用）
  - 打印流是包装流，不具备写出功能
  - 可以把字节输出流转换成字符输出流

特有功能

- 自动换行`println`
- 自动刷新只有在调用`println`、`printf`或`format`才有用

### 对象操作流

可以用于读写任意类型的对象

`ObjectOutputStream`对象输出流

- `writerObject`
- `ObiectOutputStream(OutputStream out)`

`ObjectInputStream`对象输入流

- `readObject`
- `ObjectInputStream(InputStream in)`

使用对象输出流写出对象，只能使用对象输入流读取对象

Serializable:序列号，是一个标志接口，只起标识作用

当一个类的对象需要IO流进行读写的时候，这个类必须实现该接口

可以用ArrayList添加对象，然后对象输出流将其写出去

```java
public class ObjectOutputStreamDemo {
	public static void main(String[] args) throws IOException,FileNotFoundException, ClassNotFoundException {
		method();
		ObjectInputStream ois = new ObjectInputStream(new FileInputStream("a.txt"));
		Object obj = ois.readObject();
		ArrayList<Student> list = (ArrayList<Student>) obj;
		for (Student student : list) {
			System.out.println(student.getAge() + student.getName());
		}
		ois.close();
	}

	private static void method() throws IOException, FileNotFoundException {
		ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("a.txt"));
		ArrayList<Student> list = new ArrayList<Student>();
		list.add(new Student("sda",51));
		list.add(new Student("sasd",55));
		oos.writeObject(list);
		oos.close();
	}
}
```

#### 解决对实现序列化接口出现的黄色警告问题

使成员变量，成员方法序列号固定

`private static final long serialVersionUID = 7653920515929191643L;`

ctrl + 1

### Properties

表示了一个持久的属性集，属性列表的键都是字符串

构造方法：

- `Properties（）`

### Properties与IO流结合的功能

- `void list(PrintWriter out)`
- `void load(Reader reader)`
- `void store(Writer writer,String comments)`comment相当于对文字的概述