/*
	全局安装 -g
	全局安装的包位于Node.js环境的node_modules目录下,全局安装的包一般用于命令行工具
	本地安装
	本地安装的包在当前目录下的node_modules下，本地安装的包一般用于实际的开发工作
	npm常用的命令：
	1、安装包(如果没有指定版本号，那么安装最新的版本)
	npm install -g 包名称  (全局安装)
	npm install 包名称  (本地安装)

	2、安装包的时候可以指定版本
	npm install -g 包名称@版本号

	3、卸载包
	npm uninstall -g 包名

	4、更新包(更新到最新版本)
	npm update -g 包名

	生产环境（项目部署上线之后的服务器环境）
	开发环境（平时开发使用的环境）
	--save向生产环境添加依赖dependencies
	--save-dev向开发环境添加依赖DevDependencies
	npm install --production 安装生产环境的
	npm install 全安装
*/