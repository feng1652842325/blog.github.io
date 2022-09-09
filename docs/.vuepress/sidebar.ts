import { sidebar } from 'vuepress-theme-hope';

export default sidebar([
  '/',
  {
    text: '前端',
    icon: 'edit',
    prefix: '/posts',
    children: [
      {
        text: 'JavaScript',
        prefix: 'JavaScript',
        children: ['throttle']
      },
      {
        text: 'Css',
        prefix: 'Css',
        children: ['clipPath']
      },
      {
        text: '项目配置',
        prefix: 'Settings',
        children: ['eslintFormat']
      },
      {
        text: '小程序',
        prefix: 'Miniprogram',
        children: ['AndroidIosDiff']
      },
      {
        text: 'Vue',
        prefix: 'Vue',
        children: ['licensePlate']
      }
    ]
  }
]);
