const express = require("express");
const cors = require('cors');
const jwt = require("jsonwebtoken");

const app = express();

//解析请求体
app.use(express.urlencoded({extended:true}));
//设置解析json类型的body
app.use(express.json());

//使用跨越插件
app.use(cors());

/* 
//解决跨越问题
app.use((req,res,next) =>{
    console.log("跨域设置：",req.body,req.method,req.headers);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    //设置可以放行的
    //res.setHeader("Access-Control-Request-Method","GET,POST,PUT");
    //res.setHeader("Access-Control-Request-Headers","Content-Type");
    next();
}); 
*/

//测试无响应的请求
app.get("/test",(req,res)=>{
    
})

const secretKey = "hobarthobart";

//登录路由
app.post("/login",(req,res) =>{
    console.log(req.body)
    const {username,password} = req.body;
    if(username === "admin" && password === "123") {
        // res.send({
        //     status:"ok",
        //     data:{
        //         id:"987654321",
        //         username,
        //         nickname:"超级管理员"
        //     }
        // });

        const token = jwt.sign({
            id:"987654321",
            username,
            nickname:"超级管理员"
        },secretKey,{
            expiresIn:"1h"
        });

        //返回jwt的token
        res.send({
                status:"ok",
                data:{
                    token:token,
                    nickname:"超级管理员"
                }
            });
    }else {
        res.status(401).send({
            status:"error",
            data: "用户名或密码错误"
        });
    }
});


const STU_ARR = [
    {id:"1",name:"刘德华",age:25,gender:"男",address:"中国香港"},
    {id:"2",name:"梁冠华",age:45,gender:"男",address:"中国北京"},
    {id:"3",name:"刘亦菲",age:18,gender:"女",address:"中国上海"}
]

//提供rest接口

//查询学生
app.get("/students",(req,res)=>{
    try{
        //bearer+空格+tooken值
        const token = req.header("Authorization").split(" ")[1];
        const decodeData = jwt.verify(token,secretKey);
        console.log(decodeData);
        res.send({
            status:"ok",
            data:STU_ARR
        });
    }catch(error) {
        res.status(401).send({
            status:"error",
            data:"token失效"
        });
    }
})

//添加学生
app.post("/students",(req,res)=>{
    //console.log("添加学生：",req.body);
    //解构附值
    const {name,age,gender,address} = req.body;

    const student = {
        id: +STU_ARR.at(-1).id + 1 + "",
        name,
        age:+age,// +处理数据类型转换
        gender,
        address
    }
    //添加学生
    STU_ARR.push(student);
    res.send({
        status:"ok",
        data:student
    });
})

//通过id获取学生
app.get("/students/:id",(req,res)=>{
    const id = req.params.id;
    const student = STU_ARR.find(item => item.id === id);
    if(student) {
        res.send({
            status:"ok",
            data:student
        });
    }else {
        res.status(403).send({
            status:"error",
            data:"获取的学生不存在"
        });
    }
})

//删除
app.delete("/students/:id",(req,res)=>{
    const id = req.params.id;

    for (let i = 0; i < STU_ARR.length; i++) {
        const student = STU_ARR[i];
        if(student.id === id){
            //删除学生
            STU_ARR.splice(i,1);
            res.send({
                status:"ok",
                data:student
            });
            return;
        }
    }
    res.status(403).send({
        status:"error",
        data:"删除的学生不存在"
    });
})

//更新
app.put("/students",(req,res)=>{
    //解构负值
    const {id,name,age,gender,address} = req.body;

    const student = STU_ARR.find(item => item.id === id);
    if(student) {
        student.name = name;
        student.age = +age;
        student.gender = gender;
        student.address = address;

        res.send({
            status:"ok",
            data:student
        });
    }else {
        res.status(403).send({
            status:"error",
            data:"更新的学生不存在"
        });
    }
})

//设置404
app.use((req,res)=>{
    res.status(404).send({
        status:"error",
        data:"访问的资源不存在"
    });
});

app.listen(3000,()=>{
    console.log("服务器启动成功~");
})