## Java常用API--补充

#### Object


- `String toString()`  : 返回该对象的字符串表示，输出对象默认就是tostring方法
  - return `getClass().getName()` + "@" + `Integer.toHexString(hashCode())`;
  - `getClass()`:返回一个字节码对象
  - `Integer.toHexString()`:返回指定参数的十六进制字符串形式
  - `hashCode()`：返回该对象的哈希码值（内部地址）
- `boolean equals(Object obj)`  使用==来比较两个对象是否相等，则比较地址值是否相等

#### System

包含一些有用的类字段和方法。它不能被实例化

- `static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)` 复制数组
  - 参数1：源数组
  - 参数2：源数组的起始索引位置
  - 参数3：目标数组
  - 参数4：目标数组的起始索引位置
  - 参数5：指定接受的元素个数

```java
        int[] src = {1,2,3,4,5};
		int[] dest = new int[5];
		System.arraycopy(src, 2, dest, 2, 3);//00345
		
		for (int i = 0; i < dest.length; i++) {
			System.out.print(dest[i]);
		}
```

-  `static long currentTimeMillis()`  以**毫秒值**返回当前系统时间
  - 这个毫秒的时间是相对时间，相对于1970-1-1 00:00:00 ： 0
  - 1970-1-1 00:01:00: 1000 * 60
- `static void exit(int status)` 终止虚拟机
- `static void gc()`  （了解）运行垃圾回收器

#### Data

Date:表示特定的瞬间，精确到毫秒，他可以通过方法来设定自己所表示的时间，可以表示任意的时间

构造方法：

- `Date()` ：创建的是一个表示当前系统时间的Date对象
- `Date(long date)` ：根据"指定时间"创建Date对象   毫秒值

常用方法

- 毫秒值---Data：`void setTime(long time)` /`Date(long date)`
- Data---毫秒值：`long getTime()` 

##### `SimpleDateFormat`

格式化

- Date --- String
- 2019-9-1   2019年9月1日
- `String format(Date date)` 

解析

- String --- Date
- "2019-9-1"
- `Date parse(String source)` 

构造方法

- `SimpleDateFormat()` ：使用默认的模式进行对象的构建
- `SimpleDateFormat(String pattern)` ：使用的指定的模式进行对象的构建

##### `Calendar`

日历，提供了一些操作年月日时的方法

- `void set(int field, int value)` ：把指定的字段修改成指定的值

```java
c.set(Calendar.DAY_OF_MONTH, 20);
```

- `void add(int field, int amount)`: 在指定的字段上加上指定的值

```java
c.add(Calendar.DAY_OF_MONTH, -1);
```

- `int get(int field)`  返回给定日历字段的值

```java
System.out.println(Calendar.YEAR);//1默认
```

