/* 
    ES模块化导出

*/

//向外部导出内容
export let a = 10;
export const b = "刘德华";
export const c = {name:"刘亦菲"};

//设置默认导出，一个模块中只有一个默认导出
// export default function sum(a,b){
//     return a + b;
// }

// export default 10;

// let d = 20;
// export default d;

//默认导出对象
export default {
    name:"杨幂"
};

console.log("我是ES模块m4");