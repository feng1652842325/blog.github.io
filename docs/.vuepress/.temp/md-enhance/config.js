import { defineClientConfig } from "@vuepress/client";
import "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/admin/Desktop/项目/blog/node_modules/_reveal.js@4.5.0@reveal.js/dist/reveal.css";
import Presentation from "/Users/admin/Desktop/项目/blog/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.206@vuepress-plugin-md-enhance/lib/client/components/Presentation.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
  },
});
