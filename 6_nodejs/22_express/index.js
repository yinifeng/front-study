const express = require("express");
const path = require("node:path");
const userRouter = require("./routes/user.js");
//const goodsRouter = require("./routes/goods.js");

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

/* 
//Router是express中创建的一个对象
const router = express.Router();
//router实际上是一个中间件，可以在该中间件上去绑定各种路由以及其它的中间件
router.get("/hello",(req,res) => {
    res.send("Hello Router");
});
app.use(router); 
*/

/* 
    上面Router可以是独立的对象，故可以模块化定义路由
        routes中放 各个路由，通过导入路由实现模块化分离
*/
//加前缀区分，是路由的访问地址发生冲突
// /user/list
app.use("/user",userRouter);
// /goods/list
//app.use("/goods",goodsRouter);
app.use("/goods",require("./routes/goods.js"));


//404
app.use((req,res)=>{
    res.status(404).send("<h1>您访问的页面不存在</h1>");
});

app.listen(3000,()=>{
    console.log("服务器已启动~");
})