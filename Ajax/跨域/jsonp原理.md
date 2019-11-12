## jsonp原理

- 静态script标签的src属性进行跨域请求 
  - 必须保证加载的顺序
  - 不方便通过程序传递参数
- 动态创建script标签，通过标签的src属性发送请求
  - 发出去的请求是异步请求(可以返回一个方法)

```
var script = document.createElement('script');
flag = ……;
script.src = '……?flag='+flag;
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);
```

jsonp的本质：动态创建script标签，然后通过它的src属性发送跨域请求，然后服务器端响应的数据格式为【函数调用】,在发送请求之前必须声明一个函数，并且函数的名字与参数中传递的名字要一致，这里声明的函数是由服务端响应的内容（实际上就是一段js代码-函数调用）来调用