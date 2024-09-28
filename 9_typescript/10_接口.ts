let obj10:{name:string,age:number,salary:number} = {name:"hobart",age:18,salary:3000}

//接口定义
interface Person10{
    name:string,
    age:number,
    readonly salary:number,
    like?:string[],
    //可选属性
    run?:()=>void,
    //任意属性
    [propName:string]:string|number|string[]|(()=>void)
}

//使用接口
let if01:Person10 = {name:"hobart",age:18,salary:3000}

//接口继承
interface Animals {
    age:number,
    name:string
}

interface Food {
    food:string
}

interface Cat extends Animals,Food {
    color:string
}

let xiaoMao:Cat = {
    age:2,
    name:"喵喵",
    food:"鱼",
    color:"black"
}

//多重继承
interface Tiger extends Cat{
    height:number
}

//接口同名会合并
interface Boy{
    name:string,
    age:number
}

interface Boy{
    hobby:string[]
}

//同名接口 会合并
let if02:Boy = {
    name:"tom",
    age:16,
    hobby:["篮球","足球"]
}

//接口中也能使用联合类型
interface MyInterface01{
    //string类型和函数类型
    run:string|(()=>void)
}

//接口能定义数组,不推荐
interface MyInterface02{
    [index:number]:string
}

let myInterface02:MyInterface02=["abc","def"]

//接口定义函数
interface MyInterface03{
    //无参 返回值number
    //():number,
    (a:number):string
}


let myInterface03:MyInterface03=function(a:number) {
    return a+"";
}

/* 
    interface与type的区别有下面几点
    1、type能够表示非对象类型，而interface只能表示对象类型（包括数组，函数等）
    2、interface可以继承其他类型，type不支持继承
    3、同名interface会自动合并，同名type会报错
    4、interface不能包含属性映射（mapping），type可以
*/