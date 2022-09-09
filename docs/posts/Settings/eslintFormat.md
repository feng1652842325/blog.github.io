---
# 这是文章的标题
title: Eslint 和 Prettier 配置
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2022-06-28
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - 项目配置
---
>在协同开发中为了保证成员的代码风格一致以及代码规范，大部分的项目都会配置代码规范校验（eslint）以及自动化格式化代码

### 1.配置前准备

npm install eslint -D  
npm install prettier -D

### 2.Vscode配置

因为vscode有自动格式化的功能，所以我们可以直接在vscode中的settings中配置，使我们保存文件的时候自动格式化

``` js
{
  // 每次保存的时候将代码按格式进行修复
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

格式化的配置项也可以在这里加入，但是在写其他项目的时候同样会格式化，所以我们将配置写到项目的.prettierrc目录下，这样在拉取项目代码的时候可以保证配置一致
Prettier配置

``` json
{ 
  // 最大长度80个字
  printWidth: 80,
  // 行末分号
  semi: false,
  // 单引号 
  singleQuote: true,
  // JSX双引号
  jsxSingleQuote: false,
  // 尽可能使用尾随逗号（包括函数参数）
  trailingComma: "none",
  // 在对象文字中打印括号之间的空格。 
  bracketSpacing: true,
  // > 标签放在最后一行的末尾，而不是单独放在下一行 
  jsxBracketSameLine: false,
  // 箭头圆括号
  arrowParens: "avoid",
  // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
  insertPragma: false, 
  // 缩进 
  tabWidth: 2,
  // 使用tab还是空格 
  useTabs: false,
  // 行尾换行格式 
  endOfLine: "auto",
  // 指定HTML文件的全局空格敏感度
  HTMLWhitespaceSensitivity: "ignore"
};
```

好了，现在我们在保存文件的时候就会自动化格式化你的代码了（强迫症狂喜）

### 3.Eslint配置

eslint 规则在项目目录下的.eslintrc.js的rules中配置

``` js
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  parser: "vue-eslint-parser",
  // add your custom rules here
  rules: {
  ...
  },
};

```

具体规则详见 <https://cn.eslint.org/docs/rules/>  
prettier格式化规范需和eslint规则保持一致
