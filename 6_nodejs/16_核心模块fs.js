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

/* 
    mkdir()创建目录，可以接收一个 配置对象作为第二个参数
        通过该对象可以对方法的功能进行配置
            recursive 默认值为false
                - 设置true以后，会自动创建不存在的上一级目录
*/
// fs.mkdir(path.resolve(__dirname,"./hello/abc"),{
//     recursive: true
// })
// .then(r => {
//     console.log("创建成功~");
// })
// .catch(e => {
//     console.log("创建失败：",e);
// })

//nodejs后续版本用rm()替代
// fs.rmdir(path.resolve(__dirname,"./hello"),{
//     recursive: true
// })
// .then(r => {
//     console.log("删除成功~");
// })
// .catch(e => {
//     console.log("删除失败：",e);
// })

//重命名文件，也就是剪切
// fs.rename(path.resolve(__dirname, "./复制的文件.png"),
//     path.resolve(__dirname, "./重命名的文件.png")
// ).then(r => {
//     console.log("重命名成功~");
// }).catch(e => {
//     console.log("重命名失败：", e);
// })