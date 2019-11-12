# Map与Set

## Set

Set的特点

- 无序（存储和读取的顺序可能不一样）
- 不允许重复
- 没有整数索引

```java
		HashSet<String> set = new HashSet<String>();
		set.add("hello");
		set.add("world");
		for(String s : set) {
			System.out.println(s);
		}
```

#### 使用HashSet存储自定义对象并遍历

- HashSet的add()方法，首先会使用当前集合中的每一个元素和新添加的元素进行hash值比较
- 如果hash值不一样，则直接添加新的元素
- 如果hash值一样，比较地址值或者使用equals方法进行比较
- 比较结果一样，则认为是重复不添加，所有的比较结果都不一样则添加

```java
		HashSet<Student> hs = new HashSet<Student>();
		Student s = new Student("zhangsan",18);
		Student s2 = new Student("lisi",19);
		Student s3 = new Student("lisi",19);
		hs.add(s);
		hs.add(s2);
		hs.add(s3);
		for (Student student : hs) {
			System.out.println(student);//会显示3个
		}
```

#### 重写hashCode方法和equals方法实现HashSet存储自定义对象去重

```java
	@Override
	public boolean equals(Object obj) {
		Student s = (Student)obj;
		if(this.age != s.age) {
			return false;
		}
		if(!this.name.equals(s.name)) {
			return false;
		}
		return true;
	}
```
hash值不一样的话就不比内容了，因此要重写，让hash值相等
```java
	@Override
	public int hashCode() {
		return 1;
	}
```

优化：

可以让成员变量不同的对象，他们的hash值也不同，这就可以减少一部分equals方法的比较，从而可以提高我们程序的效率

可以尝试着让hashCode方法的返回值和对象的成员变量有关
获取hashCode方法返回值后再相加（boolean不可以参与运算）

自动生成的方法：

```java

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Person other = (Person) obj;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
```

### `Collection`和`Collections`有什么区别

- `Collection`是集合体系的最顶层，包含了集合体系的共性（两个主要子类`list`和`set`）
- `Collections`是一个工具类，方法都是用于操作`Collection`
  - `static int  binarySearch(List list, Object key)` 使用二分查找法查找指定元素在指定列表的索引位置 
  - `static void copy(List dest, List src)` :是把源列表中的数据覆盖到目标列表，目标列表的长度至少等于源列表的长度
  - `static void fill(List list, Object obj)` :使用指定的对象填充指定列表的所有元素
  - `static void reverse(List list)`  :反转
  - `static void shuffle(List list)`:随机置换 
  - `static void  sort(List<T> list)` :按照列表中元素的自然顺序进行排序
  - `static void swap(List list, int i, int j)` :将指定列表中的两个索引进行位置互换

## Map

Map:将**键**映射到值的对象。一个映射不能包含重复的键；每个键最多只能映射到一个值

Map和Collection有什么区别

- Map:是一个双列集合，常用语处理有对应关系的数据，key是不可以重复的
- Collection:是单列集合，Collection有不同的子体系，有的允许重复有索引有序，有的不允许重复而且无序

#### Map的功能概述与测试

- 添加或修改功能

  - `V put(K key, V value)` 就是将key映射到value，如果key存在，则覆盖value，并将原来的value返回，如果是添加就是返回null，修改就返回被覆盖的value

  ```java
  		Map<String,String> map = new HashMap<String,String>();
  		System.out.println(map.put("ITCAST001", "张三"));//null
  		System.out.println(map.put("ITCAST002", "李四"));//null
  		System.out.println(map.put("ITCAST001", "王五"));//张三
  ```

- 获取功能

  - `V get(Object key)` 根据指定的key返回对应的value
  - `int size()` 返回对应关系的个数

- 判断功能

  - `boolean containsKey(Object key)` 判断指定key是否存在
  - `boolean containsValue(Object value)` 判断指定的value是否存在
  - `boolean isEmpty()` 判断是否有对应关系

- 删除功能

  - `void clear()`  清空所有的对应关系  
  - `V remove(Object key)`  根据指定的key删除对应关系，并返回key所对应的值，如果没有删除成功则返回null

- 遍历功能

  - `Set<Map.Entry<K,V>> entrySet()` 

获取所有的key

- `Set<K> keySet()`  返回Set---不允许重复

获取所有的value

- `Collection<V> values()` 返回Collection---允许重复

#### Map的遍历方式

- 第一种方式
  - 首先召集所有的key，遍历所有的key，获取每一个key，让每一个key去找它自己的value

```java
public class MapDemo {
	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("上", "下");
		map.put("左", "右");
		map.put("高", "低");
		//召集所有的key
		Set<String> keys = map.keySet();
		//遍历所有的key
		for (String key : keys) {
			//让每个key锁定自已的value
			String value = map.get(key);
			System.out.println("key是" + key + "时对应的value是" + value);
		}
	}
}
```

- 第二种方式
  - 获取所有的entryset对象，遍历包含了这些对象的集合，获取每个单独的对象，通过对象获取key和value

```java
   class Entry<K,V> {
   	K key;
   	V value;
   	public KV(K key，V value) {
   		this.key = key;
   		this.value = value;
   	}

   	public K getKey() {
   		return key;
   	}
   
   	public V getValue() {
   		return value;
   	}
   }
```

`Set<Map.Entry<K,V>> entrySet()`  

```java
public class MapText {
	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String,String>();
		map.put("上", "下");
		map.put("左", "右");
		map.put("高", "低");
		//获取所有的entryset对象
		Set<Map.Entry<String, String>> entrys = map.entrySet();
		//遍历包含了这些对象的集合
		for (Map.Entry<String, String> entry : entrys) {
			//获取每个单独的对象，通过对象获取key和value
			String key = entry.getKey();
			String value = entry.getValue();
			System.out.println("key是" + key + "时对应的value是" + value);
		}
	}
}
```

