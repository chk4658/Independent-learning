# Redis入门使用

https://www.jianshu.com/p/aa0469f473ec   windows10下使用Redis

https://www.jianshu.com/p/6895384d2b9e Redis Desktop Manager的下载及安装

### redis基本命令

1、redis存储的是：key，value格式的数据，其中key都是字符串，value有5种不同的数据结构

- 字符串类型string
- 哈希类型hash：map格式
- 列表类型list：linkedlist格式。支持重复元素
- 集合类型set：不允许重复元素
- 有序集合类型sortedset：不允许重复元素，且元素有顺序

2、string类型

- 存储：set key value
- 获取：get key
- 删除：del key

3、哈希类型hash

- 存储：hset key field value
- 获取：
  - hget key field：获取指定的field对应的值
  - hgetall key：获取所有的field和value
- 删除：hdel key field

4、列表类型list：可以添加一个元素到列表的头部（左边）或者尾部（右边），允许重复

- 添加：
  - lpush key value：将元素加入到列表左表
  - rpush key value：将元素加入到列表右表
- 获取：lrange key start end 范围获取
- 删除：
  - lpop key：删除列表最左边的元素并返回元素
  - rpop key：删除列表最右边的元素并返回元素

5、集合类型set：不允许重复元素、

- 存储：sadd key value
- 获取：smembers key
- 删除：srem key value

6、有序集合类型sortedset：不允许重复元素，且元素有顺序

- 存储：zadd key score value  这里score类似权重概念
- 获取：
  - zrange key start end
  - zrange key start end withscores
- 删除：zrem key value

7、通用命令

- key *：查询所有的键
- type key：获取指定key的类型
- del key：删除指定的key value

### 持久化

1、redis是一个内存数据库，当redis服务器重启，或者电脑重启，数据会丢失。可以将redis内存中的数据持久化保存到硬盘的文件中

2、redis持久化机制

- RDB：默认方式，在一定的间隔时间中，检测key的变化情况，然后持久化数据

  - 编辑res.windows.conf文件,重新启动redis服务器，指定配置文件名称redis-server.exe redis.windows.conf

  持久化会形成一个dump.rdb文件

  ```conf
  #   In the example below the behaviour will be to save:
  #   after 900 sec (15 min) if at least 1 key changed
  #   after 300 sec (5 min) if at least 10 keys changed
  #   after 60 sec if at least 10000 keys changed
  save 900 1
  save 300 10
  save 60 10000
  ```

- AOF：日志记录的方式，可以记录每一条命令的操作。可以每一次命令操作后，持久化数据

  - 编辑res.windows.conf文件  appendonly no要改为yes

  ```conf
  # appendfsync always  每一次操作都进行持久化
  appendfsync everysec   每隔一秒操作一次
  # appendfsync no     不持久化
  ```

### Jedis

一款Java操作redis数据库的工具

1、下载jedis的jar包

2、使用

```java
//1、获取连接,本机连接可以空参
Jedis jedis = new Jedis("localhost",6379);
//2、操作
jedis.set("username","zhangsan");
//3、关闭连接
jedis.close();
```

jedis.setex("key","t","value") 将键值对存入redis，t秒后自动删除该键值对

#### jedis连接池：JedisPool

使用：

1、创建JedisPool连接池对象

2、调用方法getResourse()方法获取Jedis连接