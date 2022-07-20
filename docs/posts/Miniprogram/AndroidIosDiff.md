---
# 这是文章的标题
title: IOS和安卓的兼容性问题
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
  - 小程序
---

> 在微信开发者工具中有时候会遇到ios和Android上不兼容的问题，因此这里做一个记录，方便排查问题

### 时间转换问题

new  Date("时间") 在IOS会出现NAN的情况所以对于时间转换需要另行封装

``` js
const formatDate = (date) => {
  return new Date(date.replaceAll("-", "/")).getTime();
};
```
