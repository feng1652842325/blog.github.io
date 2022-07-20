import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Sutera | blog',
  description: 'vuepress-theme-hope 的演示',

  base: '/',

  theme
});
