# MySQL的SQL语句

SQL：Structure Query Language结构化查询语言

#### SQL分类

- DDL：数据定义语言，定义数据库，数据表它们的结构 create（创建） drop（删除） alter（修改）
- DML：数据操纵语言，主要是用来操作数据 insert（插入） update（修改） delete（删除）
- DCL：数据控制语言，定义访问权限，取消访问权限，安全设置，grant
- DQL：数据查询语言：select（查询） from子句 where子句

### 数据库的增删改查操作

- 首先登录数据库服务器：mysql -uroot -p紧接密码

#### 创建数据库

```mysql
create database 数据库名字;
create database firstdb;

create database 数据库的名字 character set 字符集;
create database firstdb character set utf-8;

create database 数据库的名字 character set 字符集 collate 校对规则;
create database firstdb character set utf-8 collate utf8_bin;
```

#### 查看数据库

```mysql
--查看数据库定义的语句
    show create database 数据库的名字
    show create database firstdb;

--查看所有数据库
    show databases;
```

information_schema

performance_schema

mysql

这三个库不要动

#### 修改数据库

```mysql
--修改数据的字符集
    alter database 数据库的名字 character set 字符集；
    alter database firstdb character set gbk;
```

#### 删除数据库

```mysql
drop database 数据库名字;
drop database secdb;
```

#### 其他数据库操作命令

```mysql
--切换数据库（选中数据库）
    use 数据库名字
    use firstdb;

--查看当前正在使用的数据库
    select database();
```

### 表的增删改查操作

#### 创建表

```mysql
create database 数据库名字

create table 表名(列名1 列的类型（长度） 约束,列名2 列的类型（长度） 约束);

列的类型：
java              sql
int               int
char/string       char/varchar 
                  char：固定长度     char（3） 一空格空格
                  varchar：可变长度  varchar（3） 一  
                  长度代表字符的个数,比如一个汉字一个字符，一个字母也是一个字符
double            double
float             float
boolean           boolean
date              date：YYYY-MM-DD
                  time：HH-MM-SS
                  datetime：YYYY-MM-DD HH-MM-SS 默认值是null
                  timestamp：YYYY-MM-DD HH-MM-SS 默认使用当前时间
                  
                  text：主要存放文本
                  blob：存放的二进制
                  
列的约束：
        主键约束：primary key
        唯一约束：unique
        非空约束：not null
        
创建表：
1、实体：学生
2、学生id
3、性别
4、姓名
5、年龄
create table student(
    sid int primary key,
    sname varchar(10),
    sex int,
    age int
);
```

#### 查看表

```mysql
--查看所有的表
    show tables;
--查看表的创建过程
    show create table student;
--查看表结构
    desc student;
```

#### 修改表

```mysql
添加列（add）
alter table 表名 add 列名 列的类型 列的约束
alter table student add score int not null;

修改列（modify）
alter table student modify sex varchar(2);

修改列名（change）
alter table student change sex gender varchar(2);

删除列（drop）
alter table student drop score;

下面两个不太要用
修改表名（rename）
rename table student to stu;

修改表的字符集
alter table student character set gbk;
```

#### 删除表

```mysql
drop table student;
```

### SQL完成对表中数据的增删改查操作

#### 插入数据

```mysql
    insert into 表名（列名1，列名2，列名3）values(值1，值2，值3);
    insert into student(sid,sname,sex,age)values(1,'zhangsan',1,23);
--简化,如果是全列名的话
    insert into student values(2,'lisi',1,24);

--批量插入
    insert into student values(3,'wangwu',1,25),(4,'zhaoliu',1,26);

--单条插入和批量插入的效率
    批量插入的效率快，关键字翻译少

--查看表中数据
    select * from student;
```

##### 命令行下插入中文问题

insert into student values(5,'李四',1,24);

- 临时解决：set names gbk;
- 修改my.ini配置
  - 暂停MySQL服务
  - C:\Program Files\MySQL\MySQL Server 5.5
  - 57行改gbk

#### 删除记录

```mysql
delete from 表名 [where 条件]
delete from student where sid=2;

delete from student; 一条一条删除所有数据

delete删除数据和truncate删除数据有什么差别？
delete:DML  一条一条删除表中数据
truncate:DDL  先删除表再重建表
哪一条执行效率高？
具体要看表中的数据量，如果数据比较少，delete高效，反之则反
```

#### 更新表记录

```mysql
update 表名 set 列名1=列的值，列名2=列的值 [where 条件]
--将sid为5的名字改成张三
如果参数是字符串或是日期，要加上单引号
update student set sname='张三' where sid=5;
```

#### 查询记录

```mysql
select [distinct] [*] [列名1，列名2] from 表名 [where 条件]
distinct：去除重复的数据

--商品分类：手机数码，鞋靴箱包
1、分类id
2、分类名称
3、分类描述
create table category(
    cid int primary key auto_increment,
    cname varchar(10),
    cdesc varchar(30)
);
insert into category values(null,'手机数码','电子产品');
insert into category values(null,'鞋靴箱包','生活用品');
insert into category values(null,'香烟酒水','日常用品');
insert into category values(null,'柴米油盐','生活琐碎');
insert into category values(null,'锅碗瓢盆','瓶罐杯盏');

--所有商品
1、商品id
2、商品名称
3、商品价格
4、生产日期
5、商品分类id

商品和商品分类关系：所属关系
create table product(
    pid int primary key auto_increment,
    pname varchar(10),
    price double,
    pdate timestamp,
    cno int
);
auto_increment自动排序号，被删除的记录会占着序号
insert into product values(null,'小米mix4',998,null,1);
insert into product values(null,'锤子',4998,null,1);
insert into product values(null,'阿迪王',99,null,2);
insert into product values(null,'老村长',98,null,3);
insert into product values(null,'劲酒',35,null,3);
insert into product values(null,'盐',2,null,4);
insert into product values(null,'平底锅',400,null,5);
insert into product values(null,'碗',400,null,5);

--查询所有
    select * from category;
--查询特定列
    select cname,sdesc from category;

--别名查询 as关键字 as是可以省略的
    --表别名：select p.name,p.price from product p;(主要用于多表查询)
        select p.name,p.price from product as p;
    
    --列别名：select pname as 商品名称,price as 商品价格 from product;
        select pname as 商品名称,price as 商品价格 from product;
    
--去掉重复的值,只查询，不会删除记录
    select distinct price from product;

--select运算查询,在查询结果上做了处理，实际还只是查询
    select *,price*1.5 as 零售价 from product;

--条件查询（where关键字）
    指定条件，确定要操作的记录
--where后的条件写法
    --关系运算符：>  >=  <  <=  =  !=  <>
        <>:不等于：标准的SQL语法
        !=:不等于：非标准的SQL语法
        
    --逻辑运算：and，or，not
        --查询商品价格再10到100之间
            select * from product where price > 10 and price < 100;
            between……and……
            select * from product where price between 10 and 100;
    
    --like:模糊查询
        _  ：代表的是一个字符
        %  ：代表的是多个字符
        --查询出名字中带有底的所有商品  '%底%'
            select * from product where pname like '%底%';
        --查询名字第二个字是酒的所有商品   '_酒%'
            select * from product where pname like '_酒%';
        
    --in 在某个范围中获得值
        --查询商品分类id在1，4，5里面的所有商品
        select * from product where cno in (1,4,5);
        
--排序查询：order by 关键字
    asc：ascend 升序（默认）
    desc：descend 降序
        
    --查询所有商品 按照价格排序
        select * from product order by price;
    --查询所有商品 按照价格排序,降序
        select * from product order by price desc;
    
--聚合函数
    sum() 求和
    avg() 求平均值
    count() 统计数量
    max() 最大值
    min() 最小值
    --获得商品价格的总和：
        select sum(price) from product;
    --获得所有函数的个数：
        select count(*) from product;
        
    --注意：where语句后面不能接聚合函数
        但可以这么写：--子查询
        select * from product where price > (select avg(price) from product);
        
--分组 group by
    --根据cno分组，分组后统计商品的个数
        select cno,count(*) from product group by cno;
    --根据cno分组，分组统计每组商品的平均价格，并且商品平均价格>60
        select cno,avg(price) from product group by cno having avg(price) > 60;
        
        --having 关键字 可以接聚合函数的，出现在分组之后
        --where 关键字 不可以接聚合函数 出现在分组之前
        
--编写顺序
    select  from  where  group by  having  order by
```

