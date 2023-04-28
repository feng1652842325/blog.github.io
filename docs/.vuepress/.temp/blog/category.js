export const categoryMap = {"category":{"/":{"path":"/category/","map":{"前端":{"path":"/category/%E5%89%8D%E7%AB%AF/","keys":["v-7dddf666","v-223efce3","v-37f59702","v-0c930ddf","v-7e87a8ba"]}}}},"tag":{"/":{"path":"/tag/","map":{"Css":{"path":"/tag/css/","keys":["v-223efce3"]},"JavaScript":{"path":"/tag/javascript/","keys":["v-37f59702"]},"小程序":{"path":"/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/","keys":["v-0c930ddf"]},"项目配置":{"path":"/tag/%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE/","keys":["v-7e87a8ba"]},"组件":{"path":"/tag/%E7%BB%84%E4%BB%B6/","keys":["v-7dddf666"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


