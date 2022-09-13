import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '博客',
  description: '个人博客--用于记录工作中遇到的问题和思考',

  base: '/',

  theme
});
