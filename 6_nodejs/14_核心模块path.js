/* 
    path
        - 表示的路径
        - 通过path可以用来获取各种路径
        - 要使用path，需要先对其进行引入
        - 方法：
            path.resolve([...paths])
                - 用来生成一个绝对路径
                    相对路径：./xx ../xx xxx
                    绝对路径：
                        - 在计算机本地
                            c:\xx
                            /User/xxx
                        - 在网络中
                            http:/www.xxxx/...
                            https:/www.xxx/...
                - 如果直接调用resolve，则返回当前的工作目录
                    F5 Vscode中执行输出：D:\Dev\sourceCodes\vsCodes\h5-demo
                    node .\14_包管理器path.js 命令输出：D:\Dev\sourceCodes\vsCodes\h5-demo\6_nodejs
                    - 注意，我们不同的方式执行代码时，它的工作目录可能是有变化的
                - 如果将一个相对路径作为参数，则resolve会自动将其转换为绝对路径
                    此时根据我们工作目录的不同，它所产生的绝对路径
*/

//path需要模块化导入
const path = require("node:path");
console.log(path);

//node .\14_包管理器path.js 命令输出：D:\Dev\sourceCodes\vsCodes\h5-demo\6_nodejs
//F5 Vscode中执行输出：D:\Dev\sourceCodes\vsCodes\h5-demo
//const result = path.resolve();

//node .\14_包管理器path.js 命令输出：D:\Dev\sourceCodes\vsCodes\h5-demo\6_nodejs\hello.js
//F5 Vscode中执行输出：D:\Dev\sourceCodes\vsCodes\h5-demo\hello.js
//const result = path.resolve("./hello.js");


//最终形态
//__dirname 当前运行路径,相对路径
//以后在使用路径时，尽量通过path.resolve()来生成路径
const result = path.resolve(__dirname, "./hello.js");
//上一个目录的hello.js
//const result = path.resolve(__dirname, "../hello.js");
console.log(result);


/* 
    fs (File System)
        - fs用来帮助我们node来操作磁盘中的文件
        - 文件操作就是所谓的I/O，input output
        - 使用fs模块，同样需要引入

*/

const fs = require("node:fs");
//相对路径不稳定
//const fileBuffer = fs.readFileSync("./hello.txt");
/*  
    使用绝对路径
    readFileSync()同步读取文件的方法，会阻塞后边代码执行
    当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的形式返回
    Buffer是一个临时用来存储数据的缓冲区
*/
//不推荐是使用同步方法
//const fileBuffer = fs.readFileSync(path.resolve(__dirname,"./hello.txt"));
//console.log(fileBuffer);
//打印字符串
//console.log(fileBuffer.toString());

//异步读取方法fs.readFile()
fs.readFile(path.resolve(__dirname,"./hello.txt"),(error,buffer) => {
    if(error) {
        console.log("出错了！");
    }else {
        console.log(buffer.toString());
    }
});


/* 
    Promise版本的fs方法
        需要重新导入fs的包

*/
const fs2 = require("node:fs/promises");
// fs2.readFile(path.resolve(__dirname,"./hello.txt"))
// .then(buffer => {
//     console.log(buffer.toString());
// }).catch(e => {
//     console.log("出错了！");
// });

;(async () => {
    try {
        const buffer = await fs2.readFile(path.resolve(__dirname, "./hello.txt"));
        console.log(buffer.toString());
    } catch (e) {
        console.log("出错了！");
    }
})();

console.log("结束....");