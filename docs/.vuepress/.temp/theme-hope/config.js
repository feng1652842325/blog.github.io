import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/export.js";

import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-theme-hope@2.0.0-beta.206@vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});