//js声明变量
//let a = 1;

//ts声明变量
let a:number = 2;

//a = "abc";

//tsc index.ts 编译成js

let b:boolean = true;
console.log(b);

//let c:string;
//c = null;

const d:string = "abc";
//d = "";

let boo:boolean = true;


let nu:null = null;

//需要es6编译 tsc index.tx --target es6
//let s:symbol = Symbol("abc");

let nud:undefined = undefined;

//any 类型
let an:any = "abc";
an = 123;
an = true;

//let abc = 1;//类型推断成number
let abc;
abc = 1;
abc = "bac";

let k:unknown = 5;
//console.log(k * 2);
//定义unkown必须检查类型才能使用，比any安全
if(typeof(k) === "number") {
    console.log(k * 2);
}

//never类型不可能有结果
function fn():never {
    throw new Error("出错了");
    //return 123;
}

//值类型，只能为 "hello"
let m:"hello" = "hello";