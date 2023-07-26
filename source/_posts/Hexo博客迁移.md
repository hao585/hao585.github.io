---
title: Hexo迁移
tags: [hexo]
categories: 教程
date: 2023年7月25日17:37:05
author: 铁蛋
---

# 1.在新电脑上安装git和Node.js

# 2.安装Hexo

# 3. 复制原电脑上的数据

## 3.1需要复制的

{% note info %}

- _config.yml：站点配置/对应的主题配置

- package.json：说明使用那些包
- scaffolds：文章的模板
- source：自己写的博客文件
- themes：主题
- .gitignore：限定在提交的时候哪些文件可以忽略

{% endnote %}

# 4.新建一个博客文件，将复制的文件粘贴进去

在git bash中切换目录到新拷贝的文件夹里，使用npm install 命令，进行模块安装。很明显我们这里没用hexo init初始化，因为有的文件我们已经拷贝生成过来了，所以不必用hexo init去整体初始化，如果不慎在此时用了hexo init，则站点的配置文件_config.yml里面内容会被清空使用默认值，所以这一步一定要慎重，不要用hexo init。

# 5.安装其他插件

```sh
npm install hexo-deployer-git --save # 为了使用hexo d来部署到git上 
#下面可以省略
npm install hexo-generator-feed --save # 为了建立RSS订阅
npm install hexo-generator-sitemap --save # 为了建立站点地图

```

# 6.验证

首先本地执行，在博客根目录下执行：

```sh
hexo g
hexo s

```

此时可访问浏览器：http://localhost:4000/ ，查看是否转移成功。

#  7.部署

```sh
hexo d
```



