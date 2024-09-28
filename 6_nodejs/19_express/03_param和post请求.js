const express = require("express");
const path = require("node:path");

const app = express();

//设置静态资源路径
// http://127.0.0.1:3000  index.html
app.use(express.static(path.resolve(__dirname,"./public")));

//解析请求体
app.use(express.urlencoded({extended:true}));

//设置登录路由
app.get("/login",(req,res)=>{
    if(req.query.username === "admin" && req.query.password === "123") {
        res.send("欢迎您，登录成功！");
    }else {
        res.send("用户名或密码错误");
    }
});

//设置post登录路由
app.post("/login",(req,res)=>{
    //通过req.body来获取post请求的参数（请求体中的参数）
    //默认情况下express不会自动解析请求体，需要通过中间件来增加功能
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if(username === "admin" && password === "123") {
        res.send("欢迎您，登录成功！");
    }else {
        res.send("用户名或密码错误");
    }
});

//get请求发送参数的第二种方式
// /hello/:id 表示用户访问 /hello/123 时就触发
//在路径中已冒号命名的部分我们称为param，在get请求它可以被解析为参数
//param传参一般不会传很复杂的参数
//rest风格请求
app.get("/hello/:id",(req,res) =>{

    console.log(req.params);
    console.log(req.params.id);

    res.send("<h1>这是一个hello路由</h1>");
});

app.listen(3000,()=>{
    console.log("服务器已启动~");
})