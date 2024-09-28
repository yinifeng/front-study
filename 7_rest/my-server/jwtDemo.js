const jwt = require("jsonwebtoken");


const secretKey = "okokokok";

//生成token
const token = jwt.sign({name:"hoabrt",age:18,gender:"男"},secretKey,{
    expiresIn:"1h"
});

console.log(token);

try{
    //解析token
    const decodeData = jwt.verify(token,secretKey);
    console.log(decodeData);
}catch(e) {
    console.log("解析jwt出错：",e);
}
