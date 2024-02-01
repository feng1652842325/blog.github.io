import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "笔记",
    icon: "edit",
    prefix: "/notes/",
    children: [
      {
        text: "前端",
        link: "frontEnd",
      },
    ],
  },
  {
    text: "工具",
    icon: "tools",
    prefix: "/tools/",
    children: [
      {
        text: "链接",
        link: "links",
      },
    ],
  },
]);
