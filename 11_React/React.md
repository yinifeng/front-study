# React

**React** 是一个用于构建用户界面的 JavaScript 库，用来为现代的网络构建用户界面。React起源于Facebook，由Facebook的软件工程师 Jordan Walke 开发，2012年部署于 Instagram，2013年开源。除此之外，React还有React Native框架，通过它让我们可以直接使用 JavaScript 来编写原生应用。

React的特点：

- 虚拟DOM
- 声明式
- 基于组件
- 支持服务器端渲染
- 快速、简单、易学



## 1、HelloWorld

React的常规开发方式并不是通过浏览器引入外部js脚本来使用，但在入门阶段我们暂且先使用这种方式来简单体会一下React。

使用React开发Web项目，我们需要引入两个js脚本：

```
react.development.js
```

- react 是react核心库，只要使用react就必须要引入
- 下载地址：https://unpkg.com/react@18.0.0/umd/react.development.js

```
react-dom.development.js
```

- react-dom 是react的dom包，使用react开发web应用时必须引入
- 下载地址：https://unpkg.com/react-dom@18.0.0/umd/react-dom.development.js

- babel编译JSX，babel下载地址：https://unpkg.com/babel-standalone@6/babel.min.js



## 2、创建React项目

### 手动创建项目，项目结构

常规的React项目需要使用npm（或yarn）作为包管理器来对项目进行管理。并且React官方为了方便我们的开发，为我们提供react-scripts包。包中提供了项目开发中的大部分依赖，大大的简化了项目的开发。

开发步骤：

- 创建项目，目录结构如下

  ```shell
  根目录
      - public
          - index.html （添加标签 <div id="root"></div>）
      - src
          - App.js
          - index.js
  ```

- 进入项目所在目录，并执行命令：`npm init -y` 或 `yarn init -y`
- 安装项目依赖：`npm install react react-dom react-scripts -S` 或 `yarn add react react-dom react-scripts`
- 运行`npx react-scripts start`启动项目（初次启动需要输入y确认）
- 或者将`react-scripts start`设置到`package.json`的scripts选项中，然后通过`npm start`启动（初次启动需要输入y确认）”scripts”: { “start”: “react-scripts start” }

index.html：

```html
<!DOCTYPE html>
<html lang="zh">
<head>
   <meta charset="UTF-8">
   <title>Title</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
```

App.js：

```js
const App = () => {
   return <h1>Hello React!</h1>
}
export default App;
```

index.js：

```js
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
```



### create-react-app创建项目

上述创建React项目方式在有的人看来可能会有一些麻烦，并且在实际开发中它也不是大部分人所选择的方式。之所以在这里选择这种方式，只是我个人的一种喜好，我在入门阶段学习时使用上述方式，能够认识项目里的每一行代码，所以我采用了手动创建的项目的形式。

如果你不喜欢这种方式，可以自己提前预习一下create-react-app相关的内容，这也是常规的创建项目的方式。

https://lilichao.com/?p=5777

```shell
# 使用create-react-app创建react脚手架
npx create-react-app 项目名称
```



