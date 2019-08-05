http://120.79.162.149:3002/?nsukey=pjWGdtb%2BUceJt9WpYWMJBkGgWAlvxQPTb79hBgLUdjglIgTQC2LI43wgN6IJzB3vFYfroR%2FGDZTTwbsrJN3xZv7x9%2Fau4dPGXOgvc9XWkcewRZuiIxPt0zeeS7Xd8rqaXNgqO%2B%2FFbzQMdP2J%2FfXV3YZz4ydGgUiIddP59xcOobe5HS3aJ9c52RS%2B5ipJGkV8MKsrAq1LgJNhNmn9FyN5BA%3D%3D#/recommend
基于Vue 2.0 + VueRouter + Vuex 全家桶方案来模仿网易云音乐WebApp项目 css预编译工具使用的是sass,音乐滚动加载用的是betterscroll，全面采用es6风格代码

解决了哪些问题
- 图片懒加载  vue-lazyload
- 前后端分离  
  使用node.js NeteaseCloudMusicAPI proxy 8080 + 3000
- fastclick
- 设计了store
  songs index song singer mode favoriteList searchHistory playHistory
- iconfont
- eslint

- 上班，vue项目，分析清楚目录结构
  1. components/ 跟路由挂钩 工作的入口
  2. store/ 全局共享 分模块 了解关键状态
  3. common/ 公共组件不用写
  4. api/ 前后端的协作方式
