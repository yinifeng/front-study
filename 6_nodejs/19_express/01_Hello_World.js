/* 
    - 使用步骤
        1、创建并初始化项目
            yarn init -y
        2、安装express
            yarn add express
        3、创建index.js并编写代码        


*/

//引入express
const express = require("express");

//console.log(express);

//获取服务器实例
const app = express();

/* 
    如果希望服务器可以正常访问，则需要为服务器设置路由
        路由可以根据不同的请求方式和请求地址来处理用户的请求

        app.METHOD(...)
            METHOD 可以是get 或 post ..

    中间件（类似JAVA中web容器的Filter）
        - 在express中我们使用app.use来定义一个中间件
            中间件作用和路由很像，用法很像
            但是路由不区分请求方式，只看路径
        - 和路由的区别
            1、会匹配所有请求 （不会和请求方式有关）
            2、路径设置父目录            
*/

/* 
//默认是根路径/
app.use("/",(req,res) =>{
    //如果是/路径会拦截所有请求
    console.log("收到请求...",Date.now());

    res.send("我是中间件返回的数据~");
}); 
*/

//next 是第3个参数
app.use((req,res,next) => {
    console.log("111",Date.now());
    //放行执行下一个满足条件的中间件
    next();
});

app.use((req,res,next) => {
    console.log("222",Date.now());
    //放行执行下一个满足条件的中间件
    next();
});

app.use((req,res,next) => {
    console.log("333",Date.now());
    res.send("<h1>333</h1>");
});



//路由回调函数执行时，会接收3个参数
//第一个参数 request，简写成req
//第二个参数 response，简写成res
app.get("/hello",(req,res) =>{
    //服务器根路径
    //访问根路径，会执行这个函数
    console.log("有人访问我了~");
    //在路由中应该做两件事
    //读取用户的请求(request)
    //通过request读取用户请求的参数
    console.log(req);
    console.log(req.url);


    //根据用户的请求返回响应(response)
    //res表示服务器发送给客户端的响应信号
    //可以通过res来向客户端返回数据

    //设置响应码，并且发送响应
    //res.sendStatus(404);

    //只设置响应码，不发送响应
    res.status(404);
    //发送响应数据
    res.send("<h1>你的请求没问题，就是不给你看！</h1>");
});


//启动服务器
app.listen(3000,() => {
    console.log("服务器已启动~");
})