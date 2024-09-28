const express = require("express");
const path = require("node:path");

const app = express();

//设置静态资源路径
// http://127.0.0.1:3000  index.html
app.use(express.static(path.resolve(__dirname,"./public")));

//解析请求体
app.use(express.urlencoded({extended:true}));

const UERS = [{
        username: "admin",
        password: "123",
        nickname: "管理员"
    },
    {
        username: "guest",
        password: "123",
        nickname: "来宾"
    }]

//设置post登录路由
app.post("/login",(req,res)=>{
    //通过req.body来获取post请求的参数（请求体中的参数）
    //默认情况下express不会自动解析请求体，需要通过中间件来增加功能
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const user = UERS.find((user) => {
        return user.username === username && user.password === password;
    })
    if(user) {
        res.send(`<h1>欢迎登录成,${user.nickname}</h1>`);
    }else {
        res.send("用户名或密码错误");
    }
});

app.post("/regist",(req,res)=>{
    const{username,password,nickname} = req.body;
    console.log(username,password,nickname);
    const user = UERS.find((user) => {
        return user.username === username;
    })
    if(user) {
        res.send("注册的用户名已存在");
    }else {
        UERS.push({username,password,nickname});
        res.send("注册成功");
    }
});

//设置统一404拦截
app.use((req,res)=>{
    res.status(404);
    res.send("<h1>访问资源未找到</h1>");
});

app.listen(3000,()=>{
    console.log("服务器已启动~");
})