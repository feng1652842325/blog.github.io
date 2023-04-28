import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: `Destiny's Blog`,
  description: '个人博客--用于记录工作中遇到的问题和思考',

  base: '/',

  theme
});
