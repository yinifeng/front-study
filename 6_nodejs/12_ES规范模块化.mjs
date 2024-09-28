/* 
    从2015年ES6来，引入ES的模块化

    默认情况下，node中的模块化标准是CommonJS
        要想使用ES的模块化，可以采用以下两种方案
            1、使用mjs作为扩展名
            2、修改package.json (用来描述当前文件下的文件)将模块化规范设置为ES模块化规范
                当我们设置 "type":"module" 当前项目下所有的js文件都默认为ES模块化
                根据项目推荐（目前CommonJS用的多一些node中），其实ES模块化更好，性能更高
            3、ES模块化在浏览器中也可以使用，但是通常不会使用（需要考虑兼容性问题），都是结合打包工具使用
*/

//ES模块化，没有module
//console.log(module);
//也没有arguments
//console.log(arguments);

//导入m4.cjs模块，ES自定义模块不能省略扩展名（js和mjs文件名）

//解构赋值
// import { a, b, c } from "./module/m4.mjs";
// console.log(a);
// console.log(b);
// console.log(c);

//别名
// import { a as hello, b, c as obj} from "./module/m4.mjs";
// console.log(hello);
// console.log(b);
// console.log(obj);

//开发尽量避免 import * 情况
// import * as m4 from "./module/m4.mjs";
// console.log(m4);
// console.log(m4.a);
// console.log(m4.c);


//当有模块中默认导出
// import sum from "./module/m4.mjs";
//默认导出的可以随便命名
// import helloSum, {a} from "./module/m4.mjs";
// console.log(helloSum);//默认导出的
// console.log(a);

//通过ES模块化导出的都是常量,就算ES中let声明
//ES模块化中都是严格模式下
import { a, b, c } from "./module/m4.mjs";
console.log(a);
//Uncaught TypeError TypeError: Assignment to constant variable.
//a = 21;

//对象属性可以改
console.log(c);
c.name = "周杰伦";
console.log(c);