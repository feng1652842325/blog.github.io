---
# 这是文章的标题
title: 防抖和节流
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
  - JavaScript
---

防抖和节流可谓是老生常谈了，其目的都是为了防止高频率的js代码的执行

::: tip 防抖
当一个函数连续触发，只执行最后一次。
:::

``` js
// fn是你要调用的函数，delay是防抖的时间
function debounce(fn, delay) {
  // timer是一个定时器
  let timer = null;
  // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
  return function () {
    // 保存事件参数，防止fn函数需要事件参数里的数据
    let arg = arguments;
    // 调用一次就清除上一次的定时器
    clearTimeout(timer);
    // 开启这一次的定时器
    timer = setTimeout(() => {
      // 若不改变this指向，则会指向fn定义环境
      fn.apply(this, arg);
    }, delay)
  }
}
```

::: tip 节流
函数每隔一个时间段只能触发一次
:::

``` js
function throttle(fn, delay) {
  // 重置定时器
  let timer = null;
  // 返回闭包函数
  return function () {
    // 记录事件参数
    let args = arguments;
    // 如果定时器为空
    if (!timer) {
      // 开启定时器
      timer = setTimeout(() => {
        // 执行函数
        fn.apply(this, args);
        // 函数执行完毕后重置定时器
        timer = null;
      }, delay);
    }
  }
}
```
