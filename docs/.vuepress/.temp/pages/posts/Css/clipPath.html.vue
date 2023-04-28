<template><div><p>很多时候因为项目需要我们需要画一些不规则的图形，这个时候就可以用到css的clip-path 比如:</p>
<<<<<<< HEAD
<p><img src="@source/images/cardShape.png" alt="cardShape"></p>
=======
<figure><img src="@source/images/cardShape.png" alt="cardShape" tabindex="0" loading="lazy"><figcaption>cardShape</figcaption></figure>
>>>>>>> 5225856fdd3644ae2eff2ed45b7410d3aee641cd
<p>拿到这样UI图首先可以确定后段返回的肯定是字符串，前端处理成数组后循环出数字，再给每个数字做成卡片的样式</p>
<p>简单的理清思路后就是敲代码了，前面都没什么难度，主要是卡片的样式是一个不规则的长方形，查询了多种方法之后选用了clip-path来做</p>
<hr>
<p>首先来看clip-path的<strong>定义</strong>和<strong>属性</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">定义</p>
<p>clip-path 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。可以指定一些特定形状</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">属性</p>
<p>clip-path: clip-source|basic-shape|margin-box|border-box|padding-box|content-box|fill-box|stroke-box|view-box|none|initial|inherit;</p>
</div>
<table>
<thead>
<tr>
<th>值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>clip-source</td>
<td style="text-align:center">用 URL 表示剪切元素的路径</td>
</tr>
<tr>
<td>basic-shape</td>
<td style="text-align:center">将元素裁剪为基本形状：圆形、椭圆形、多边形或插图</td>
</tr>
<tr>
<td>margin-box</td>
<td style="text-align:center">使用外边距框作为引用框</td>
</tr>
<tr>
<td>border-box</td>
<td style="text-align:center">使用边框作为引用框</td>
</tr>
<tr>
<td>padding-box</td>
<td style="text-align:center">使用内边距框作为引用框</td>
</tr>
<tr>
<td>content-box</td>
<td style="text-align:center">使用内容框作为引用框</td>
</tr>
<tr>
<td>fill-box</td>
<td style="text-align:center">使用对象边界框作为引用框</td>
</tr>
<tr>
<td>stroke-box</td>
<td style="text-align:center">使用笔触边界框（stroke bounding box）作为引用框</td>
</tr>
<tr>
<td>view-box</td>
<td style="text-align:center">使用最近的 SVG 视口（viewport）作为引用框。</td>
</tr>
<tr>
<td>none</td>
<td style="text-align:center">这是默认设置。 没有剪辑</td>
</tr>
<tr>
<td>initial</td>
<td style="text-align:center">设置属性为默认值</td>
</tr>
<tr>
<td>inherit</td>
<td style="text-align:center">属性值从父元素继承。</td>
</tr>
</tbody>
</table>
<p>裁剪的时候会从左上角以百分比坐标轴的方式顺时针方向裁剪<br>
画一个图就很容易理解了</p>
<<<<<<< HEAD
<p><img src="@source/images/clipShape.png" alt="clipShape"></p>
=======
<figure><img src="@source/images/clipShape.png" alt="clipShape" tabindex="0" loading="lazy"><figcaption>clipShape</figcaption></figure>
>>>>>>> 5225856fdd3644ae2eff2ed45b7410d3aee641cd
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">numberList_item</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0% 0%<span class="token punctuation">,</span> 100% 0%<span class="token punctuation">,</span> 100% 45% <span class="token punctuation">,</span>85% 50% <span class="token punctuation">,</span>100% 55% <span class="token punctuation">,</span>100% 100% <span class="token punctuation">,</span>0% 100% <span class="token punctuation">,</span>0% 55% <span class="token punctuation">,</span>15% 50% <span class="token punctuation">,</span>0% 45%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


