---
# 这是文章的标题
title: 上传进度水波纹效果
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2023-04-28
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - Css
---

::: vue-demo demo 演 示

```vue
<template>
  <div class="box">
    <!-- 上传进度动画效果 -->
    <div class="animation_warp">
      <div class="num">50%</div>
      <div class="wave"></div>
      <div class="wave-mask"></div>
    </div>
  </div>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {}
};
</script>
<style>
.box {
  position: relative;
  border: 1px solid rgba(233, 233, 233, 1);
  overflow: hidden;
  width: 200px;
  height: 100px;
  background-color: skyblue;
}
.wave-mask {
  position: absolute;
  width: 150%;
  height: 300%;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transition: 0.1s;
  border-radius: 40%;
  transform: translate(-50%, -101%) rotate(0);
  animation: spin 30s linear infinite;
  z-index: 20;
  background-color: #e0eeed;
}
.num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30rpx;
  font-weight: bold;
  text-align: center;
  z-index: 30;
}
@keyframes spin {
  50% {
    transform: translate(-50%, -101%) rotate(500deg);
  }
  100% {
    transform: translate(-50%, -101%) rotate(1100deg);
  }
}
</style>
```

:::
