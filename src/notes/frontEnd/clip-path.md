---
title: clip-path
pageInfo: false
date: 2022-11-03
category:
  - 前端
tag:
  - css
---

:::info 起因
最近做项目遇到了一个如下的需求，其中的小卡片样式由于 UI 没有提供素材，只好用 CSS 去实现这种功能
:::

![](/assets/material/frontEnd/card.png)

在查百度过程中发现了一个很有意思的属性 clip-path ，翻译成中文就是裁剪路径

```css
clip-path: <clip-source> | [ <basic-shape> || <geometry-box> ] | none;
```

其默认值是 none。另外简单介绍 clip-path 几个属性值

## clip-source

用 URL 表示剪切元素的路径

## basic-shape

使用一些基本的形状函数创建的一个形状。主要包括 circle()、ellipse()、inset()和 polygon()

### polygon()函数

用于定义一个多边形，也可以用来剪裁图形。它的参数是一组坐标对，每一个坐标对代表多边形的一个顶点坐标。浏览器会将最后一个顶点和第一个顶点连接得到一个封闭的多边形。坐标对使用逗号来进行分隔，可以使用绝对单位或百分比单位值。

## geometry-box

是可选参数。此参数和 basic-shape 函数一起使用时，可以为 basic-shape 的裁剪工作提供参考盒子。如果 geometry-box 由自身指定，那么它会使用指定盒子形状作为裁剪的路径，包括任何(由 border-radius 提供的)的角的形状。

我们使用 polygon()函数去定义一个多边形,看着很复杂，但其实看下面图示很好理解，坐标对依次从 ==左上角->右上角->右下角->左下角== 顺时针方向连接裁剪出一个自定义多边形

<img src="/assets/material/frontEnd/clip_example.png" width = 200 height = 400>

```css
.num_card {
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 45%,
    85% 50%,
    100% 55%,
    100% 100%,
    0% 100%,
    0% 55%,
    15% 50%,
    0% 45%
  );
}
```
