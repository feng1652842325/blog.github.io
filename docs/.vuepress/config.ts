import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Sutera | blog',
  description: 'Sutera的个人微博',

  base: '/',

  theme
});
