import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
  hostname: 'https://vuepress-theme-hope-v2-demo.mrhope.site',

  author: {
    name: 'Destiny'
  },

  iconAssets: 'iconfont',

  repo: 'feng1652842325/feng1652842325.github.io',

  docsDir: 'demo/src',

  navbar: navbar,

  sidebar: sidebar,

  // footer: '默认页脚',

  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag'],
  editLink: false,
  blog: {
    avatar: 'avatar.png',
    roundAvatar: true,
    description: '与其感慨路难行，不如马上出发',
    medias: {
      // Baidu: 'https://example.com'
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    }
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['625619915']
    }
  },

  plugins: {
    blog: true,

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: 'Giscus',
    //   repo: 'vuepress-theme-hope/giscus-discussions',
    //   repoId: 'R_kgDOG_Pt2A',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOG_Pt2M4COD69'

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      card: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
});
