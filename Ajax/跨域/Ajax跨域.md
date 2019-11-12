## Ajax跨域

- 同源策略
  - 同源策略是浏览器的一种安全策略，所谓同源指的是请求URL地址中的协议、域名和端口都相同，只要其中之一不相同就是跨域
  - 同源策略主要为了保证浏览器的安全性
  - 在同源策略下，浏览器不允许Ajax跨域获取服务器数据

### 跨域解决方案

- jsonp
- document.domain+iframe
- location.hash+iframe
- window.name+iframe
- window.postMessage
- flash等第三方插件