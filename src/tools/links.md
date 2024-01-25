---
home: true
icon: link
title: 链接
heroImage: /assets/images/preview/tools.jpg
heroText: 链接
tagline: 工具链接
description: 链接

containerClass: tools links

tools:
  - name: OKTools
    desc: 程序员在线工具
    url: https://oktools.net
    preview: /assets/images/preview/oktools.jpg

  - name: Photopea
    desc: 在线Photoshop
    url: https://www.photopea.com/
    preview: /assets/images/preview/photopea.jpg

  - name: Squoosh
    desc: 图片压缩对比工具
    url: https://squoosh.app/
    preview: /assets/images/preview/squoosh.jpg

  - name: 67tool
    desc: 办公软件在线工具
    url: https://www.67tool.com/
    preview: /assets/images/preview/67tool.jpg

  - name: pexels
    desc: 免费素材图片
    url: https://www.pexels.com/zh-cn/
    preview: /assets/images/preview/pexels.jpg

  - name: 蓝奏云
    desc: 非常方便的云存储
    url: https://up.woozooo.com/account.php?action=login&ref=/mydisk.php
    preview: /assets/images/preview/woozooo.jpg
---

## 工具

<SiteInfo
  v-for="item in $frontmatter.tools"
  :key="item.link"
  v-bind="item"
/>
