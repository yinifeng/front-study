//参数限定类型，返回值限定类型
function fn(m:string,n:number):string {

    return m + n;
}

fn("s",1);

let fn2 = function(m:string,n:number):void {
    console.log(m,n);
}

//let fn3:(m:string,n:number)=>void = (m:string,n:number):void => console.log(m,n);
//一般省略写
let fn3 = (m:string,n:number):void => console.log(m,n);

let fn4:()=>void;
fn4 = ()=>{};

let fn5:(n:number)=>string;
fn5= (n:number) => {return n + ""}


//返回对象
let fn6:(name:string)=>{name:string};

fn6=function(name:string){
    return {
        name:name
    }
}

//限定函数类型
let fn7:(n1:number,n2:number)=>number;

//参数可以是一个
fn7 = function(n1:number) {
    return 1;
}

//可变参数
function fn8(a:number,...b:string[]) {
    console.log(a,b);
}

fn8(1,"a","b","c");