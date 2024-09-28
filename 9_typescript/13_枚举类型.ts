//枚举 enum
enum OrderStatus{
    Unfa,
    Yifa,
    Transport,
    Unsign,
    Signed
}

console.log(OrderStatus.Unfa);


enum HttpStatus{
    Sucess = 200,
    NotFound = 404,
    Error = 500,
    //不赋值会 编译后设置成501，所以设置都要给值
    ServerError
}

console.log(HttpStatus["Sucess"]);
console.log(HttpStatus.ServerError);

//反向映射，通过值读取枚举,反向映射只支持 数字
console.log(HttpStatus[200]);

enum NetError{
    Ok = "成功",
    ConnectError = "连接错误",
    ReadError = "读取错误",
    //Error, //不能递增
}


//异构枚举，枚举值又是数字和字符串，不推荐使用
enum MyEnum{
    Status = 0,
    Msg = "成功"
}