const express = require("express");
const path = require("node:path");

const app = express();

//将ejs设置为默认的模板引擎
app.set("view engine","ejs");
//配置模板路径
app.set("views",path.resolve(__dirname,"views"));

//设置静态资源路径
// http://127.0.0.1:3000  index.html
app.use(express.static(path.resolve(__dirname,"./public")));

//解析请求体
app.use(express.urlencoded({extended:true}));


const STUDENTS =  [
    {name:"刘德华",age:26,gender:"男",address:"中国香港"},
    {name:"孙红雷",age:32,gender:"男",address:"中国东北"},
    {name:"刘亦菲",age:22,gender:"女",address:"中国北京"}
]


app.get("/students",(req,res) => {
    //希望用户访问students路由时，可以给用户返回一个显示有学生信息的页面
    /* 
        html页面属于静态页面，创建的时候什么样子，用户看到就是什么样子
            不会自动跟随服务器中数据的变化而变化

        希望有这么一个东西，他呢长的像是个网页，但是他里边可以嵌入变量
            这个东西在node中被称为 模板，
            
        在node中存在很多个模板引擎,都各具特色，个人偏好：EJS （语法html语法，类似JSP）
        
        ejs时node中的一款模板引擎，使用步骤：
            1、安装ejs yarn add ejs
            2、配置express模板引擎使用ejs

            注意，模板引擎需要被express渲染后才能使用
    
    */

     // res.render() 用来渲染一个模板引擎，并将其返回给浏览器       

    //res.render("students",{name:"hoabrt",age:18});

    /* 
        <%=hello %> 在ejs中输出内容时，它会自动对字符串中的特殊符号进行转义 &lt;
            这个设计主要为了避免xss攻击
        
        <%-hello %> 会解析标签输出   

        <% %> 可以在里面写js代码
     */
    res.render("students",{hello:"<h1>哈哈</h1>"});
});


//设置统一404拦截
app.use((req,res)=>{
    res.status(404);
    res.send("<h1>访问资源未找到</h1>");
});

app.listen(3000,()=>{
    console.log("服务器已启动~");
})