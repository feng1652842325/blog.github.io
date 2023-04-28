export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-7dddf666","v-223efce3","v-37f59702","v-0c930ddf","v-7e87a8ba"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-7dddf666","v-223efce3","v-37f59702","v-0c930ddf","v-7e87a8ba"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

