---
title: 常用js简写技巧
pageInfo: false
category:
  - 前端
tag:
  - JavaScript
---

分享记录一些实用的 js 简写技巧，可以让代码看起来更加简洁优雅

## 逻辑运算符 (||)

如果前面的值是 0 '' false null undefined NaN 其中的任意一种，则直接返回后面的值

```js
let a = undefined;
let b = a || 1; // 1
```

## 空值合并操作符 (??)

如果没有定义左侧返回右侧。如果是，则返回左侧

```js
let a = null;
let b = 1;
let c = a ?? b; // 1
```

## 防止崩溃的可选链 (?.)

判断对象的某个属性是否存在，如果存在那么就返回整个属性的值，否则返回 undefined

```js
let a = { name: "小明", cat: { name: "萌萌" } };
let b = a.dog?.name; // undefined
let c = a.cat?.name; //萌萌
```

## 转换 boolean 类型操作符 (!!)

将类型转换成 boolean 类型，类型判断同||

```js
const a = 0;
const b = !!a; // false
```
