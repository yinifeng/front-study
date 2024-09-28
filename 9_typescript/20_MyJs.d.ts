//声明函数
declare function myJsFn(x:number,y:number):number;

//声明变量
declare let myJsVar:number;

//声明对象
declare class myJsClass {
    name:string
}

interface MyJsMan {
    gender:boolean,
    make:()=>void
}

//声明接口
declare let myJsObj:MyJsMan;


//声明模块
declare module "MyModule" {
    export function fn20():void;
    export let var20:number;
}

//也可以模块化导出
export {myJsFn};

//1、同名引入 .d.ts文件和.js文件保持一致


//2.自动引入
//不开启模块化（开启模块需要手动导入），按照下面规则加载
//npm依赖的 第三方的类型声明，一般下载 在 node_modules/@types 下的声明文件中，当然这个可以tsconfig.json修改
//修改tsconfig.json 中的 typeRoots，如： typeRoots:["./typings","./vendor/types"] 
//就是修改默认 node_modules/@types 到./typings和./vendor/types ，相对tsconfig.json 的文件位置

//3、通过tsconfig.json配置自动加载
//include属性是用来指明 TypeScript编译器应该包含哪些文件的
//{
//    "include":["src/**/*"]
//}

//如果tsconfig.json不做任何特殊处理，默认会加载所有的.d.ts文件包括根目录下和任何文件夹内

//按照第三方 声明 
//npm isntall @types/jquery