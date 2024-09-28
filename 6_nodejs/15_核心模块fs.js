/* 
    fs模块可以帮助我们读取磁盘中的文件。
        fs.readFile() 读取文件
        fs.appendFile() 创建新文件，或将数据添加到已有文件中
        fs.mkdir() 创建目录
        fs.rmdir() 删除目录
        fs.rm() 删除文件
        fs.rename() 重命名
        fs.copyFile() 复制文件
*/
const fs = require("node:fs/promises");
const path = require("node:path");

//追加文件内容，如果文件不存在生成一个新的文件,正常这里代码要处理异常，暂时不处理
// fs.appendFile(path.resolve(__dirname,"./hello.txt"),"好好学习，天天向上")
// .then(r =>{
//     console.log(r);
//     console.log("文件追加完成");
// });

//通过readFile和appendFile复制一个文件
// fs.readFile(path.resolve(__dirname,"../css包结构.png"))
// .then(buffer =>{
//     return fs.appendFile(path.resolve(__dirname,"./复制的文件.png"),buffer)
// }).then(r => {
//     console.log("文件复制完成");
// });