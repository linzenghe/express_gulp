
### 目的
`Express`+`Ejs`+`Less`开发，进行`压缩`并`同步`到浏览器端。
`bower`管理js包
`requirejs` js模块化编程

### Quickstart
安装依赖：`cd Express_Gulp && npm install`
安装项目js依赖包  `bower install`

#### 使用
`npm run dev` 开发模式，具备热更新，边修改浏览器边刷新，`dev` 端口 `7000`，配置项端口为 `3001`  
`npm run build` 构建项目，输出 `dist` 目录  
`npm run start` 生产模式，不具备热更新，运行在 `3000` 端口  

然后先在根目录下执行安装：
`npm install`，使用时先运行`gulp build`将文件压缩、打包、编译，然后再执行`gulp`开启自动更新服务器。
