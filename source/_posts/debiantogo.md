---
title: "Debiantogo"
date: 2024-09-26T10:06:18+08:00
draft: false
author: "stevessr"
keywords: ["debian", "linux","to go"]
cover: ""
summary: "博客主在外接硬盘上折腾Debian to go的经历"
type: "yaml"
tags: ["debian","linux","to go"]
categories: ["debian","linux","to go"]
---

```
#前言
我为什么要折腾Debian to Go 呢?
才不是因为Arch to go 失败了。
```

# 过程

## 1、Debian安装映像一枚

[Debian -- 下载 Debian](https://www.debian.org/download)

根据你的环境进行配置

## 2、u盘一个 （用于配置ventoy）,移动硬盘一个（承载系统）

##  3、ventoy配置

下载[Ventoy](https://www.ventoy.net/cn/index.html)并写入U盘

## 4、 将Debian安装映像写入U盘

对＜（＾－＾）＞，就是直接拖进去

## 5、从U盘启动

先进入bios 关闭secure boot（避免产生奇怪错误）

重启 进入启动项选择菜单 ，选择你的U盘

## 6、安装过程

### 1）选择你的语言

### 2）选择你的地区

### 3）选择你的键盘

### 4）配置你的网络

### 5）选中你的移动硬盘作为安装的目标硬盘

### 6） 应用分区表更改

### 7） 允许使用网络镜像源

### 8）配置账户密码

### 9）enjoy

#### p.s.现在可以回复secure boot选项了
