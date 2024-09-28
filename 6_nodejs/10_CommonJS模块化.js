/* 
    nodejs中默认模块化就是CommonsJS，CommonJS模块化为第三方模块化，非ES官方模块化标准
        一直到2015年，JavaScript中一直都没有一个内置的模块化系统。但是随着JavaScript项目越来越复杂，模块化的需求早已迫在眉睫。
        于是大神门开始着手自定义一个模块化系统，CommonJS便是其中的佼佼者。同时它也是Node.js中默认使用的模块化标准。

    早期的网页中，是没有一个实质的模块规范的
        我们实现模块化的方式，就是最原始的通过script标签来引入多个js文件
        问题：
            1、无法选择要引入模块的哪些内容
            2、在复杂的模块场景下非常容易出错
            ....
        于是，我们就继续在js中引入一个模块化的解决方案
        
    在node中，默认支持的模块化规范叫CommonJs
        在CommonJS中，一个js文件就是一个模块
        
    CommonJS规范
        - 引入自定义模块
            - 使用require("模块的路径")函数来引入模块
            - 引入自定义模块时，模块要以./ 或 ../ 开头
            - 扩展名可以省略
                - 在CommonJS中，如果省略了js文件的扩展名
                    node会自动为文件补全扩展名，./m1.js 查找 ，
                    如果没m1.js文件它会寻找 ./m1.json
                    js => json => node(特殊
        - 引入核心模块时
            - 直接写核心模块的名字即可
            
    默认情况下，Node.js会将以下内容视为CommonJS模块：
        - 使用.cjs为扩展名的文件
        - 当前的package.json的type属性为commonjs时，扩展名为.js的文件
        - 当前的package.json不包含type属性时，扩展名为.js的文件
        - 文件的扩展名是mjs、cjs、json、node、js以外的值时（type不是module时）        
*/

//const m1 = require("./module/m1.js");
//省略js文件扩展名，node会不全.js
const m1 = require("./module/m1");

console.log(m1);
console.log(m1.a);
console.log(m1.b);
m1.c();

//引入核心模块
//const path = require("path");
//或者这样引入
const path = require("node:path");
console.log(path);

//cjs文件，不能省略扩展名引入
const m2 = require("./module/m2.cjs");
console.log(m2);

//package.json 文件修改 type属性切换模块化规范

//引入一个文件夹的模块
//当一个文件夹作为模块时，index作为入口文件
//文件夹作为模块时，一定有一个index.js文件
const hello = require("./module/hello");//默认引入./module/hello/index.js
console.log(hello);

/*
   CommonJS模块化原理，就是一个闭包
        每一个CommonJS模块在执行时，外层都会被套上一个函数
        (function(exports, require, module, __filename, __dirname) {
            // 模块代码会被放到这里
        });                     
*/

console.log(arguments);
//exports Module类的属性对象
//require 函数
//module Module类
//__filename 就是当前文件名全路径：D:\Dev\sourceCodes\vsCodes\h5-demo\6_nodejs\10_CommonJS模块化.js
//__dirname 极速当前文件绝对路径：D:\Dev\sourceCodes\vsCodes\h5-demo\6_nodejs