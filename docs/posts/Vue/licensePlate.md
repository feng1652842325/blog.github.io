---
# 这是文章的标题
title: 组件-车牌号录入
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2022-09-07
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - 组件
---
>因业务需求而封装的车牌号录入组件 代码如下

``` html
<template>
  <div class="container">
    <div class="phone-frame">
      <div v-for="(item, index) in 7" :key="item" class="phone-border" :class="{ light: currentIndex == index }" @click="selectFrame(index)">
        {{ license.split('')[index] }}
      </div>
    </div>
    <van-popup v-model="showKeyboard" position="bottom" @close="closeOverlay">
      <ul v-show="keyboardType === 1">
        <!-- 省键盘 -->
        <li v-for="item in provinces" :key="item" :class="{ delete: item === '×' }" @click="inputHandle(item)">{{ item }}</li>
      </ul>
      <ul v-show="keyboardType === 2">
        <!-- 字母数字键盘 -->
        <li v-for="item in keyNum" :key="item" :class="{ useless: item === 'I' || item === 'O', delete: item === '×' }" @click="inputHandle(item)">
          {{ item }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>
```

``` js
<script>
export default {
  data() {
    return {
      // 驾驶证
      license: '',
      // 显示软键盘
      showKeyboard: false,
      // 键盘状态 0-不显示 1-显示省 2表示显示数字字母
      keyboardType: 0,
      // 省级键盘
      provinces: ['京','沪','浙','苏','粤','鲁','晋','冀','豫','川','渝','辽','吉','黑','皖','鄂','津','贵','云','桂','琼','青','新','藏','蒙','宁','甘','陕','闽','×','赣','湘','台','港','澳'],
      // 数字字母键盘
      keyNum: ['0','1','2','3','4','5','6','7','8','9','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','×','Z','X','C','V','B','N','M'],
      // 当前选中的值
      currentIndex: null
    };
  },
  methods: {
    // 选中车牌号码框
    selectFrame(item) {
      this.showKeyboard = true;
      this.currentIndex = item;
      if (item === 0) {
        this.keyboardType = 1;
      } else {
        this.keyboardType = 2;
      }
    },
    // 点击遮罩层
    closeOverlay() {
      this.currentIndex = null;
      this.$emit('closeOverlay', this.license);
    },
    // 用户输入
    inputHandle(item) {
      const index = this.currentIndex;

      // 禁用 I O 开头省份
      if (item === 'I' || item === 'O') return;
      // 清空当前输入
      if (item === '×') {
        this.license = this.replaceStr(this.license, index, ' ');
        if (index >= 1) this.currentIndex--;
        if (index === 0) this.keyboardType = 1;
        return;
      }
      // 切换键盘类型
      if (index === 0) this.keyboardType = 2;
      // 自动聚焦下一个输入框
      if (index < 6) {
        this.currentIndex++;
      } else {
        this.currentIndex = null;
        this.showKeyboard = false;
      }

      this.license = this.replaceStr(this.license, index, item);
    },
    // 替换指定字符串
    replaceStr(str, index, char) {
      const strAry = str.split('');
      strAry[index] = char;
      return strAry.join('');
    }
  }
};
</script>
```

``` css
<style scoped lang="less">
.container {
  .phone-frame {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3px;
    .phone-border {
      width: 20px;
      height: 20px;
      line-height: 20px;
      border: 1px solid rgb(176, 176, 176);
      border-radius: 2px;
      margin: 0 2px 2px 0;
      text-align: center;
      font-size: 12px;
      &:nth-child(2) {
        margin-right: 7px;
      }
      &:nth-child(2)::after {
        content: ' ';
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: black;
        position: absolute;
        left: 48px;
        top: 10px;
      }
    }
    .light {
      background-color: #b1cbf1;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    li {
      width: 8vw;
      height: 10vw;
      text-align: center;
      line-height: 10vw;
      background-color: #fff;
      font-size: 3vw;
      margin: 1vw;
      border-radius: 5px;
      box-shadow: 0px 3px 2px -2px rgba(81, 81, 81, 0.4);
      &:active {
        background-color: rgb(241, 240, 240);
      }
    }
    .useless {
      color: rgb(235, 235, 235);
    }
    .delete {
      font-weight: 700;
      font-size: 18px;
      background-color: rgb(226, 223, 223);
    }
  }
}
</style>
```
