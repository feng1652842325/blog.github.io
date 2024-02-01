---
title: flex布局
pageInfo: false
category:
  - 前端
tag:
  - css
---

::: info
flex 布局又称弹性布局是一种常见的自适应布局，适合用来写移动端样式，任何一个容器都可以指定为 Flex 布局。
:::

## 指定弹性容器

```css
display: flex;
```

采用 flex 布局的元素，称为 Flex“容器”（container），它的所有子元素会自动成为容器成员，称为“项目”（item）
容器存在水平的主轴和垂直的交叉轴，可以通过容器的一些属性来控制轴的方向

## 容器属性

### flex:direction

容器默认从左往右排列，可以通过 flex-direction 来控制主轴的方向

```css
flex-direction: row ｜row-reverse ｜ column ｜column-reverse;
```

| 属性           | 含义                                             |
| -------------- | ------------------------------------------------ |
| row            | 默认值，主轴为水平方向（水平布局），从左向右排列 |
| row-reverse    | 主轴为水平方向（水平布局），从右向左排列         |
| column         | 主轴为垂直方向（垂直布局），从上往下排列         |
| column-reverse | 主轴为垂直方向（垂直布局），从下往上排列         |

### flex:warp

默认情况下，项目都排在一条轴线上，当项目超出最大宽度时会压缩“项目”的宽度，如果想让项目换行，就需要用到 flex:warp

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

| 属性         | 含义                  |
| ------------ | --------------------- |
| nowrap       | 默认值，不换行        |
| wrap         | 换行， 第一行在上面   |
| wrap-reverse | 换行 ，第一行在下方。 |

### jusify-content

定义项目在主轴上的对齐方式

```css
flex-wrap: flex-start | flex-end | center | space-between | space-around;
```

| 属性          | 含义                           |
| ------------- | ------------------------------ |
| flex-start    | 默认值，左对齐                 |
| flex-end      | 右对齐                         |
| center        | 居中                           |
| space-between | 两端对齐，项目之间的间隔都相等 |
| space-around  | 每个项目两侧的间隔相等         |

### align-item

定义项目在交叉轴上的对齐方式

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

| 属性       | 含义                                                          |
| ---------- | ------------------------------------------------------------- |
| flex-start | 交叉轴的起点对齐                                              |
| flex-end   | 交叉轴的终点对齐                                              |
| center     | 交叉轴的中点对齐                                              |
| baseline   | 项目的第一行文字的基线对齐                                    |
| stretch    | （默认值）如果项目未设置高度或设为 auto，将占满整个容器的高度 |

### align-content

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  stretch;
```

align-content 属性定义了多根轴线的对齐方式。==如果项目只有一根轴线，该属性不起作用==。

| 属性          | 含义                                     |
| ------------- | ---------------------------------------- |
| flex-start    | 交叉轴的起点对齐                         |
| flex-end      | 交叉轴的终点对齐                         |
| center        | 交叉轴的中点对齐                         |
| space-between | 与交叉轴两端对齐，轴线之间的间隔平均分布 |
| space-around  | 每根轴线两侧的间隔都相等                 |
| stretch       | （默认值）轴线占满整个交叉轴             |

## 项目属性

### order

order 属性用来定义项目的排列顺序。数值越小，排列越靠前，默认为 0

```css
order: <integer>;
```

### flex-grow

flex-grow 属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大。

```css
flex-shrink: <number>; /* default 1 */
```

### flex-shrink

flex-shrink 属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小。

```css
flex-shrink: <number>; /* default 1 */
```

### flex-basis

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

```css
flex-basis: <length>; /* default auto */
```

### flex

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

```css
flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
```

该属性有两个快捷值 auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```
