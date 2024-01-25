---
title: Promise浅谈
pageInfo: false
date: 2023-05-02
category:
  - 前端
tag:
  - JavaScript
---

::: info 介绍
Promise 是为了解决异步回调导致的“回调地狱”问题而产生的，它可以通过.then 的链式调用方式来处理异步编程，让代码更加清晰易懂。
:::

## Promise 的三种状态

### Pending（等待状态）

Promise 对象刚被创建时的初始状态，此时还没有返回结果

### Fulfilled（成功状态）

当 Promise 对象返回结果时，进入成功状态，并把结果作为参数传递给后续的 then 方法。

### Rejected（失败状态）

当 Promise 对象返回错误结果时，进入失败状态，并把错误信息作为参数传递给后续的 catch 方法

## Promise 的基本用法

Promise 是一个构造函数，它接收 resolve 和 reject 两个回调函数作为参数，resolve 会把 Promise 的状态从等待改变为成功（Pending => Fulfilled），并将异步操作的结果作为参数传递给 then 方法，reject 会把 Promise 的状态从等待改变为失败（Pending => Rejected），并将失败的原因作为参数传递给 catch 方法或 then 方法的第二个参数

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 1000);
}).then((result) => {
  console.log(result); // 输出: 'Hello, Promise!'
});
```

## 手写一个 Promise

```js
class Promise {
  // 构造器
  constructor(executor) {
    // 成功
    let resolve = () => {};
    // 失败
    let reject = () => {};
    // 立即执行
    executor(resolve, reject);
  }
}
```
