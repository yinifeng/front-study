/* 
    在项目中没有node_modules的包，可以yarn执行以下会下载    

    是实现修改代码，能够自定监听重启服务器
        不需要人工手动重启
    要实现这个功能，我们需要安装一个模块 nodemon
        使用方式：
            1、全局安装
                npm i nodemon -g
                yarn global add nodemon
                    yarn全局安装nodemon可能无法使用，需要配置环境变量
                - 启动：
                    nodemon //运行index.js
                    nodemon xxx //运行指定的js
            2、在项目中安装nodemon
                npm i nodemon -D
                yarn add nodemon -D   package.json中会添加开发依赖devDependencies
                - 启动：
                    npx nodemon
                    npx nodemon xxx 
                简化上面启动命令: 可以通过package.json配置scripts 的start，通过 yarn start启动                 
*/

const express = require("express");
const path = require("node:path");

const app = express();

/* 
    服务器中的代码，对于外部来说都是不可见的
        所以我没写的html页面，浏览器无法直接访问
        如果希望浏览器可以访问，则需要将页面所在的目录设置静态资源目录

*/

//通过中间件暴露静态资源
//http://127.0.0.1:3000/index.html
app.use(express.static(path.resolve(__dirname,"./public")));

//配置路由
app.get("/hello",(req,res)=>{
    res.send("这是一个express服务16661");
});

//登录路由
app.get("/login",(req,res)=>{
    console.log("登录访问~~");
    console.log(req.query);

    if(req.query.username === "admin" && req.query.password === "123456"){
        res.send("<h1>登录成功</h1>");
    }else {
        res.send("<h1>用户名或密码错误</h1>");
    }
});

//启动监听
app.listen(3000,()=>{
    console.log("服务器已启动~~");
});