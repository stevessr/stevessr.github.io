---
title: "Nodejs"
date: 2024-08-07T16:58:37+08:00
draft: true
author: "stevessr"
keywords: ["nodejs", "linux","nvm"]
cover: ""
summary: ""
type: "yaml"
tags: ["linux","nodejs"]
categories: ["nodejs","linux"]
---

# 在linux上安装Node.js

## 一、安装nvm

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```html
<!--不行的自己想办法-->
```

<!--笔者是这样的curl -o- https://fastgit.cc/raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash-->

## 二、加入环境变量

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

<!--这是我的-->

## 三、选择版本

```bash
nvm install $version
```

$version代表你想安装的版本

以20为例

```bash
nvm install 20
```

#### 四、检查

nvm

```bash
nvm --version
```

node.js

```bash
node --version
```

npm

```bash
npm --version
```

| 推荐的nodejs 包管理器 |                                                        |                                                 | npm包形式                 |
| --------------------- | ------------------------------------------------------ | ----------------------------------------------- | ------------------------- |
| yarn                  | corepack prepare yarn@stable --activate                | corepack prepare yarn@<version> --activate      | npm install --global yarn |
| pnpm                  | curl -fsSL -qO- https://get.pnpm.io/install.sh \| bash | wget -qO- https://get.pnpm.io/install.sh \|bash | npm install --global pnpm |
| bun                   | curl -fsSL https://bun.sh/install \| bash              | wget -qO- https://bun.sh/install \| bash        | npm install --global bun  |

