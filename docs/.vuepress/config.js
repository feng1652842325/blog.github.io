module.exports = {
  title: 'Sutera',
  description: 'Sutera的个人Blog',

  themeConfig: {
    lastUpdated: '上一次更新',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Sutera的个人博客',
        items: [{ text: 'Github', link: 'https://github.com/feng1652842325/person-blog-shf' }]
      }
    ],
    sidebar: [
      {
        title: '简介',
        path: '/'
      },
      {
        title: '前端三剑客',
        collapsable: false, // 不折叠
        children: [
          {
            title: 'JavaScript'
          },
          {
            title: 'Css',
            children: [{ title: 'clip-path', path: '/pages/Css/clipPath' }]
          },
          {
            title: 'html'
          }
        ]
      },
      {
        title: 'Vue'
      },
      {
        title: '项目',
        children: [{ title: '代码格式化及校验', path: '/pages/Settings/eslintFormat' }]
      }
    ]
  },

  markdown: {
    lineNumbers: true // 显示行号
  }
};
