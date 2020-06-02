# demobar

使用webpack构建方便编写demo的多页面框架，适合开发者编写demo页面，提供分类预览的功能。

地址: [https://iwowen.github.io/demobar/](https://iwowen.github.io/demobar/)

# 使用方法

1. 每一个demo必须有一个分类，只需要在src中创建分类目录
2. 在分类目录中添加单个demo的目录，里面必须包含`index.js`、`index.html`
3. 在分类目录中创建`config.json`，里面包含当前分类中demo的配置信息，比如标题和路径
```
// config.json 格式如下
{
  "path": [
    {
      "title": "动画按钮",
      "src": "./动画按钮"
    },
    {
      "title": "文字撕裂效果",
      "src": "./文字撕裂效果"
    },
    {
      "title": "canvas粒子泡泡",
      "src": "./canvas粒子泡泡"
    }
  ]
}
```
4. 打包的时候需要配置根目录下`.env.production`文件的`PUBLICPATH`为静态文件根路径。比如当前`demobar`项目放在`https://iwowen.github.io/demobar/`域名路径下，那么`PUBLICPATH`可以设置为`/demobar/`或者`https://iwowen.github.io/demobar/`

# version

- yarn 1.22.4
- node v10.16.0
- webpack 4.43.0

# webpack封装内容

- babel-loader 将JS转义为低版本
- html-webpack-plugin 在浏览器中查看页面，打包html
- webpack-dev-server 开发实时查看效果
- devtool 可以帮助我们将编译后的代码映射回原始源代码
- css相关loader style-loader css-loader postcss-loader autoprefixer less-loader
- clean-webpack-plugin 每次打包前清空dist目录
- copy-webpack-plugin copy静态文件目录
- underscore-template-loader 处理ejs文件中的引入
- webpack-bundle-analyzer 可以看到项目各模块的大小，可以按需优化
- open-browser-webpack-plugin 自动打开浏览器
- mini-css-extract-plugin 分离css