---
title: "Doh可用"
date: 2024-09-22T08:46:06+08:00
draft: false
author: "stevessr"
keywords: ["doh", "available"]
cover: ""
summary: "介绍了一些doh的现状"
type: "yaml"
tags: ["doh",""]
categories: ["doh","available"]
---



# 一、什么是doh

参考 [DNS over HTTPS - 维基](https://zh.wikipedia.org/wiki/DNS_over_HTTPS)

**DNS over HTTPS**（缩写：**DoH**）是[域名系统](https://zh.wikipedia.org/wiki/域名系统)的安全协议，以[HTTPS](https://zh.wikipedia.org/wiki/超文本传输安全协议)协议完成DNS解析来保护[网络主机](https://zh.wikipedia.org/wiki/网络主机)的隐私，能避免传统DNS协议中用户的DNS解析请求被窃听或者修改（例如[中间人攻击](https://zh.wikipedia.org/wiki/中间人攻击)）的情况。[[1\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-register-1)

DoH由[IETF](https://zh.wikipedia.org/wiki/IETF)支持（见 [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) （[页面存档备份](https://web.archive.org/web/20230912223539/https://datatracker.ietf.org/doc/html/rfc8484)，存于[互联网档案馆](https://zh.wikipedia.org/wiki/互联网档案馆)））。

[Google](https://zh.wikipedia.org/wiki/Google)及[Mozilla基金会](https://zh.wikipedia.org/wiki/Mozilla基金会)正在测试此协议，提高网络安全性。[[2\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-Google1-2)[[3\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-3)2018年9月5日，Mozilla基金会发布的[Firefox](https://zh.wikipedia.org/wiki/Firefox) 62正式版加入了这项功能，但需要用户手动开启。

<details>

DNS over HTTPS利用HTTP协议的GET命令发出经由[JSON](https://zh.wikipedia.org/wiki/JSON)等编码的DNS解析请求。[[2\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-Google1-2)较于传统的DNS协议，此处的HTTP协议通信处于具有加密作用的[SSL/TLS](https://zh.wikipedia.org/wiki/SSL)协议（两者统称作HTTPS）的保护之下。但是，由于HTTPS本身需要经由多次数据来回传递才能完成协议初始化，其域名解析耗时较原DNS协议会显著增加。

基于HTTPS的DNS是尚在提议阶段的标准，由IETF以RFC 8484（2018年10月）发布。它使用[HTTP/2](https://zh.wikipedia.org/wiki/HTTP/2)和[HTTPS](https://zh.wikipedia.org/wiki/超文本传输安全协议)，并支持有线格式DNS响应数据，如现有UDP响应中所返回的，在具有[MIME](https://zh.wikipedia.org/wiki/MIME)类型`application/dns-message`的HTTPS有效负载中。[[5\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-5)[[6\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-6)如果使用HTTP/2，服务器也可以使用HTTP/2服务器推送来发送它预期客户端可能提前发现有用的值。[[7\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-#1-7)

传统的DNS协议形成于互联网早期，直接基于[UDP](https://zh.wikipedia.org/wiki/用户数据报协议)或[TCP](https://zh.wikipedia.org/wiki/传输控制协议)协议，且彼时未虑及现代安全性的需要，未利用[密码学](https://zh.wikipedia.org/wiki/密碼學)等手段进行加密或验证。因而，其无法抵御现代互联网常见的[DNS投毒污染](https://zh.wikipedia.org/wiki/DNS投毒污染)等攻击手段或监听。虽然后来的[DNSSEC](https://zh.wikipedia.org/wiki/DNSSEC)方案通过[电子签名](https://zh.wikipedia.org/wiki/電子簽名)进行验证，强化了DNS的安全性，并能够抵御DNS投毒污染等篡改通信的手段，但其对于中间网络设备进行的监听仍然没有抵御能力（随后，监听者可以通过获取的通信数据知晓用户访问了哪一[域名](https://zh.wikipedia.org/wiki/域名)，而域名往往与具体的[网站](https://zh.wikipedia.org/wiki/網站)相关系）。此外，DNSSEC的起效要求现有的大量DNS解析服务的提供商（常为[互联网服务提供商](https://zh.wikipedia.org/wiki/互聯網服務供應商)或第三方大型互联网机构）对已有的DNS服务器进行大范围修改等问题，其推进进程并不理想。而对于DNS over HTTPS，在正确部署服务端并妥善配置客户端的前提下，互联网服务提供商或其它中间网络设备无法解密（亦即无法获知请求的实际内容）或者篡改已经[加密](https://zh.wikipedia.org/wiki/加密)的HTTPS通信，故其能够有效保护互联网用户的安全及隐私；另一方面，其基于已经成熟并已广泛部署的HTTPS协议，客户端进行利用较为方便。

## 实施方案

DNS over HTTPS用于DNS解析器的递归DNS解析。解析器（DoH客户端）必须能够访问托管查询端点的DoH服务器。[[7\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-#1-7)基于HTTPS的DNS缺乏操作系统的本机支持。因此，希望使用它的用户必须安装附加软件。三种使用场景很常见：

- 在应用程序中使用DoH实现：某些浏览器具有内置的DoH实现，因此可以绕过操作系统的DNS功能来执行查询。缺点是应用程序可能无法通过错误配置或缺乏对DoH的支持来通知用户是否跳过DoH查询。
- 在本地网络中的名称服务器上安装DoH代理：在此方案中，客户端系统继续使用传统（端口53或853）DNS来查询本地网络中的名称服务器，然后通过到达来通过DoH收集必要的回复 互联网中的DoH服务器。 此方法对最终用户是透明的。
- 在本地系统上安装DoH代理：在此方案中，操作系统配置为查询本地运行的DoH代理。与前面提到的方法相反，需要在希望使用DoH的每个系统上安装代理，这可能需要在更大的环境中付出很多努力。
- 为操作系统安装DoH解析插件。

在所有这些方案中，DoH客户端不直接查询任何权威名称服务器。相反，客户端依赖于使用传统（端口53或853）查询的DoH服务器来最终到达权威服务器。因此，DoH不具备[端到端加密](https://zh.wikipedia.org/wiki/端到端加密)协议的资格，只有逐跳加密且仅在始终使用[DNS over TLS](https://zh.wikipedia.org/wiki/DNS_over_TLS)时才有资格。

## 支持

### 公共DNS

DNS over HTTPS 功能已由部分公共 DNS 支持[[8\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-8)[[9\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-9)[[10\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-10)，包括：

- [AdGuard](https://zh.wikipedia.org/wiki/AdGuard)
- [阿里云](https://zh.wikipedia.org/wiki/阿里云)公共 DNS
- [Cloudflare](https://zh.wikipedia.org/wiki/Cloudflare)
- DNSPod Public DNS
- [Google Public DNS](https://zh.wikipedia.org/wiki/Google_Public_DNS)
- [OpenDNS](https://zh.wikipedia.org/wiki/OpenDNS)
- QUAD9 DNS
- [台湾网络信息中心](https://zh.wikipedia.org/wiki/台灣網路資訊中心)（Quad 101）

详见[公共域名解析服务](https://zh.wikipedia.org/wiki/公共域名解析服务)

### 软件

Edge、Firefox、Chrome浏览器均支持DoH。

### [MacOS](https://zh.wikipedia.org/wiki/MacOS)

2020年6月，苹果在WWDC大会宣布 iOS 14 与 macOS 11 新增对加密DNS的支持，包括 DNS over HTTPS（DoH）与 DNS over TLS（DoT）。[[11\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-11)

### [Microsoft Windows](https://zh.wikipedia.org/wiki/Microsoft_Windows)

2019年11月17日，一篇在微软官方博客释出的博文宣布，Windows 将支持 DNS over HTTPS（DoH)，以加密 DNS 流量保护用户隐私。[[12\]](https://zh.wikipedia.org/wiki/DNS_over_HTTPS#cite_note-12)

Windows 11支持DoH。

</details>

# 目前doh的可用情况

p.s.测试于2024/9/22上午

| 服务商     | 地址                                                         | 可用性   |
| ---------- | ------------------------------------------------------------ | -------- |
| OpenDNS    | ~~[doh.opendns.com](https://doh.opendns.com/dns-query)~~     | reset    |
|            | [208.67.222.222](https://208.67.222.222/dns-query)           |          |
|            | [208.67.220.220](https://208.67.220.220/dns-query)           |          |
|            | [[2620:119:fc::2]](https://[2620:119:fc::2]/dns-query)       |          |
|            | ~~[familyshield.opendns.com](https://familyshield.opendns.com/dns-query)~~ | reset    |
|            | [146.112.41.2](https://146.112.41.2/dns-query)               |          |
|            | [208.67.222.123](https://208.67.222.123/dns-query)           |          |
|            | [208.67.220.123](https://208.67.220.123/dns-query)           |          |
|            | ~~[sandbox.opendns.com](https://sandbox.opendns.com/dns-query)~~ | reset    |
|            | [208.67.222.2](https://208.67.222.2/dns-query)               |          |
|            | [208.67.220.2t](https://208.67.220.2/dns-query)              |          |
| Cloudflare | ~~[dns.cloudflare.com](https://dns.cloudflare.com/dns-query)~~ | reset    |
|            | ~~[cloudflare-dns.com](https://security.cloudflare-dns.com/dns-query)~~ | reset    |
|            | ~~[one.one.one.one](https://one.one.one.one/dns-query)~~     | reset    |
|            | ~~[1dot1dot1dot1.cloudflare-dns.com](https://1dot1dot1dot1.cloudflare-dns.com/dns-query)~~ | reset    |
|            | ~~[security.cloudflare-dns.com](https://security.cloudflare-dns.com/dns-query)~~ | reset    |
|            | ~~[family.cloudflare-dns.com](https://family.cloudflare-dns.com/dns-query)~~ | reset    |
|            | [dns64.cloudflare-dns.com](https://dns64.cloudflare-dns.com/dns-query) |          |
|            | [[2606:4700::6810:84e5]](https://[2606:4700::6810:84e5]/dns-query) | 证书不对 |
|            | [104.16.133.229](https://104.16.133.229/dns-query)           | 证书不对 |
|            | ~~[1.1.1.1](https://1.1.1.1/dns-query)~~                     | 超时     |
|            | ~~[1.0.0.1](https://1.0.0.1/dns-query)~~                     | 超时     |
| Wikimedia  | [wikimedia-dns.org](https://wikimedia-dns.org/dns-query)     |          |
|            | [185.71.138.138](https://185.71.138.138/dns-query)           | 证书不对 |
|            | [185.71.138.138](https://185.71.138.138/dns-query)           | 证书不对 |
| google     | ~~[dns.google](https://dns.google/dns-query)~~               | 超时     |
|            | [dns64.dns.google](https://dns64.dns.google/dns-query)       |          |
| Adguard    | ~~[dns.adguard-dns.com](https://dns.adguard-dns.com/dns-query)~~ | reset    |
|            | ~~[unfiltered.adguard-dns.com](https://unfiltered.adguard-dns.com/dns-query)~~ | reset    |
|            | ~~[family.adguard-dns.com](https://family.adguard-dns.com/dns-query)~~ | reset    |
| quad9      | ~~[dns.quad9.net](https://dns.quad9.net/dns-query)~~         | reset    |
|            | [9.9.9.9](https://9.9.9.9/dns-query)                         |          |
|            | [149.112.112.112](https://149.112.112.112/dns-query)         |          |
|            | [[2620:fe::fe]](https://[2620:fe::fe]/dns-query)             |          |
|            | [[2620:fe::9]](https://[2620:fe::9]/dns-query)               |          |
|            | ~~[dns10.quad9.net](https://dns10.quad9.net/dns-query)~~     | reset    |
|            | [9.9.9.11](https://9.9.9.11/dns-query)                       |          |
|            | [149.112.112.11](https://149.112.112.11/dns-query)           |          |
|            | [[2620:fe::11]](https://[2620:fe::11]/dns-query)             |          |
|            | [[2620:fe::fe:11]](https://[2620:fe::fe:11]/dns-query)       |          |
|            | ~~[dns11.quad9.net](https://dns11.quad9.net/dns-query)~~     | reset    |
|            | [9.9.9.10](https://9.9.9.10/dns-query)                       |          |
|            | [149.112.112.10](https://149.112.112.10/dns-query)           |          |
|            | [[2620:fe::10]](https://[2620:fe::10]/dns-query)             |          |
|            | [[2620:fe::fe:10]](https://[2620:fe::fe:10]/dns-query)       |          |

copyright stevessr 未经许可不许转载