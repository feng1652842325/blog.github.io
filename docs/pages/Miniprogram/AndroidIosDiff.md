# IOS和安卓的兼容性问题

> 在微信开发者工具中有时候会遇到ios和Android上不兼容的问题，因此这里做一个记录，方便排查问题

### 时间转换问题

new  Date("时间") 在IOS会出现NAN的情况所以对于时间转换需要另行封装

``` js
const formatDate = (date) => {
  return new Date(date.replaceAll("-", "/")).getTime();
};
```
