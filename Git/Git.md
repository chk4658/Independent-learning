# Git

- Git是一款源代码管理工具（版本控制工具）
- svn,vss,vcs……git

### 初始化Git仓库

- 命令：git init
- 这个仓库会存放git对项目代码进行备份的文件

### 配置使用者信息(姓名和邮箱)

- 姓名命令：git config --global user.name "ck"
- 邮箱命令：git config --global user.email "m15252734552@163.com"
- 每次备份会把当前备份者的信息备份起来

### 把代码存储到git仓储中

- 代码放到暂存区：git add ./Git.md    
  - git add ./ 把所有的修改的文件添加到暂存区
- 暂存区代码放到版本库：git commit -m "第一次提交"

### 查看状态

- git status 查看代码有没有更新到版本库

### 一次性把修改的代码放到版本库

- git commit --all -m "说明"

### 查看日志

- git log  查看历史提交的日志
- git log --oneline  可以看到简洁版的日志

### git版本回退

- git reset --hard Head~0回退到最后一次提交版本

### git通过版本号切换版本

- git reset --hard 2951978
- git reflog  版本切换的记录

### 分支

- 默认是有一个主分支master

#### 创建分支

- git branch dev
  - 创建dev分支
  - 在刚创建的dev分支里的东西和master分支里的东西是一样的

#### 切换分支

- git checkout dev

  - 切换到指定的分支，这里的切换到名为dev的分支

  git branch  可以查看当前有哪些分支

#### 合并分支

- git merge dev
  - 合并分支内容，把当前分支与指定的分支dev，进行合并
  - 当前分支指的是git branch命令输出的前面有*的分支
- 合并时如果有冲突，需要手动去处理，处理后还需要再提交一次

### 提交代码到GitHub（Git服务器）

- git push [地址] master
  - 会把当前分支的内容上传到远程的master分支上
- git pull [地址] master
  - 下载到本地（本地要先初始化一个仓储）
- git clone [地址]
  - 会克隆远程仓储相同的数据，多次执行会覆盖

### ssh方式上传代码

- 公钥  私钥，两者之间是有关联的
- 生成公钥和私钥
  - ssh-keygen -t rsa -C "m15252734552@163.com"

### push pull简写方式

git remote add 变量名 地址

git push 变量名 -u master

git push

git pull

-u参数会把当前分支与远程的指定的分支进行关联

### 常见问题

上传文件夹，结果为空文件夹，手动上传出现错误：

fatal: Pathspec './Git/Git.md' is in submodule 'Git'

解决方法：

git rm -rf --cached ./Git
git add ./Git/*