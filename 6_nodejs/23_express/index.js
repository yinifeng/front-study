const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("node:path");

//创建应用
const app = express();

//将ejs设置为默认的模板引擎
app.set("view engine","ejs");
//配置模板路径
app.set("views",path.resolve(__dirname,"views"));
//设置静态资源路径
app.use(express.static(path.resolve(__dirname,"./public")));
//解析请求体
app.use(express.urlencoded({extended:true}));
//增加cookie解析
app.use(cookieParser());

/* 
    现在咱们这个登录，简直形同虚设，
        HTTP协议是一个无状态的协议，
            服务器无法区分请求是否发送自同一个客户端

            cookie
                - cookie是HTTP协议中用来解决无状态问题的技术
                - cookie的本质就是一个头
                    - 服务器以响应头的形式将cookie发送给客户端
                        客户端收到以后会将其存储，并在下次向服务器发送请求时将其传回
                        这样服务器就可以根据cookie来识别出客户端了
*/

/*
    cookie的不足
        - cookie是由服务器创建，浏览器保存
            每次浏览器访问服务器时都需要将cookie发回
            这就导致我们不能在cookie存放较多的数据
            并且cookie是直接存储在客户端，容易被篡改盗用
        - 注意：
            我们在使用cookie一定不会在cookie存储敏感数据

        - 所以为了Cookie的不足，我们希望可以这样
            将用户的数据统一存储在服务器中，
                每一个用户的数据都有一个对应的id
                我们只需通过cookie将id发送给浏览器
                浏览器只需每次访问时将id发回，即可读取到服务器中存储的数据
                这个技术我们称之为session（会话）

        session
            - session是服务器中的一个对象，这个对象用来存储用户的数据
            - 每一个session对象都有一个唯一的id，id会通过cookie的形式发送给客户端
            - 客户端每次访问时只需将存储有id的cookie发回即可获取它在服务器中存储的数据
            - 在express 可以通过 express-session 组件来实现session功能
            - 使用步骤：
                ① 安装
                    yarn add express-session
                ② 引入
                    const session = require("....")
                ③ 设置为中间件
                    app.use(session({...}))
                     
*/


app.get("/set",(req,res) => {
    //设置cookie，cookie是由服务器设置的
    res.cookie("name","hobart",{
        //单位毫秒
        maxAge: 1000 * 60 * 60
    });
    res.send("设置cookie成功");
});

app.get("/get",(req,res) => {
    /* 
        获取cookie需要安装 组件，express才能获取解析的cookie
            yarn add cookie-parser
    */
    const cookie = req.cookies;
    console.log(cookie);
    if(cookie) {
        res.send("获取到cookie");
    }else {
        res.send("获取cookie失败");
    }
});

app.get("/delete-cookie",(req,res) => {
    //因为cookie是存在客户端，所以设置过期时间为0就相当实现客户端cookie删除
    res.cookie("name","",{
        //设置过期时间为0
        maxAge: 0
    });
    res.send("删除cookie成功");
});


//404
app.use((req,res)=>{
    res.status(404).send("<h1>您访问的页面不存在</h1>");
});

app.listen(3000,()=>{
    console.log("服务器已启动~");
})