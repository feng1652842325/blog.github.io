import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "code",
    prefix: "/frontEnd/",
    children: [
      {
        text: "JavaScript",
        link: "JavaScript",
      },
      {
        text: "Css",
        link: "Css",
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
      {
        text: "Excel",
        link: "excel",
      },
    ],
  },
]);
