//没有使用 export关键字，就不是一个模块化js，相当全局声明

function myJsFn(x,y) {
    return x+y;
}

let myJsVar = 1;

let myJsObj = {gender:true,make:()=>console.log("赚钱")}