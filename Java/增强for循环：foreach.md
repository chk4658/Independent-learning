# 增强for循环：foreach

foreach:增强for循环，一般用于遍历集合或者数组

格式：

```java
		for(元素的类型 变量 : 集合或者数组对象) {
			可以直接使用变量;
 		}
```

在增强for循环中不能修改集合，否则会出现并发修改异常。

```java
public class Text {
	public static void main(String[] args) {
		Collection c = new ArrayList();
		c.add("he");
		c.add("asd");
		for (Object object : c) {
			System.out.println(object);
		}
	}
}
```

`public interface Iterable<T>`实现这个接口允许对象成为 "foreach" 语句的目标。

