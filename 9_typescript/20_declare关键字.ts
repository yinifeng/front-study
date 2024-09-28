// ///<reference path="some-library.d.ts" />
// import * as someLibrary from "some-library";


//如果引入 的第三方 插件是原生js写的，ts中引入会报错，没有类型声明，可能需要自己使用declare声明类型
//但是现在大多数 第三方插件 都有提供 ts写包


//通过 .d.ts文件对js文件类型声明,和js文件创建在同目录和同名的 .d.ts文件

//npm依赖的 第三方的类型声明，一般下载 在 node_modules/@types 下的声明文件中，当然这个可以tsconfig.json修改
//修改tsconfig.json 中的 typeRoots，如： typeRoots:["./typings","./vendor/types"] 
//就是修改默认 node_modules/@types 到./typings和./vendor/types ，相对tsconfig.json 的文件位置


//使用 MyJs.js中声明的
//myJsFn(1,"1");//声明了类型编译报错
//.d.ts文件 模块化导出会报错
//myJsFn(1,2);

import {myJsFn} from "./20_MyJs";


//模块化增强，一般不这样使用
declare module "./20_MyJs" {
    export function module20(a:string):void;
}

//秒杀模块使用通配符,vue-开头的模块声明模块
// declare module "vue-*" {

// }

myJsFn(1,2);

//由于第三方，不一定都使用模块化，目前es6很少使用/// 三斜杠加载 ，通常会写入第一行
// ///<reference path="..." /> 用来指定要引用的文件路径，告诉编译器要在编译过程中包含这个文件
// ///<reference types="..." /> 用来声明对某个包类型依赖，通常用于从 @types包中引用声明
