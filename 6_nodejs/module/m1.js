//let a =10;
//let b = 10;


/* 
    模块中的内容模式是不能被外部看到的，模块和模块是相互独立的
        可以通过 exports来设置要向外部暴露的内容

    访问exports的方式有两种：
        exports
        module.exports  
        - 当我们在其他模块中引入当前模块时，require函数返回的就是exports
        - 可以将希望暴露给外部模块的内容设置为exports的属性  
*/
console.log(module);//Module对象
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);

//向外部暴露内容
// exports.a = "刘德华";
// exports.b = "张学友";
// exports.c = function() {
//     console.log("我是模块m1中的函数")
// };

//简化写一个导出,必须module.exports, 不能 exports.xx = ...
//可以通过 module.exports 导出多个值
module.exports = {
    a: "刘德华",
    b: "张学友",
    c: () => {
        console.log("我是模块m1中的函数")
    }
}


console.log("我是一个m1模块");