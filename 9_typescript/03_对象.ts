// let abc:object
// abc ={};


let obj:{name:string,age:number} = {name:"hobart",age:18}

//先声明再赋值
let obj2:{salary:number,address:string}
obj2 = {salary:123,address:"abc"}
//修改属性
obj2.salary = 456;
//obj2.address = 123;


//可选属性
// 属性?,一个对象中可以有任意个属性
let obj3:{name:string,age?:number} = {name:"刘德华"}

//任意属性
// [propName:string]:string 一个对象中只有一个任意属性，任意属性的值类型 必须包含 已存在属性值类型
let obj4:{name:string,[propName:string]:string} = {name:"刘亦菲",age:"123",adrress:"北京"}

let obj5:{name:string,[propName:string]:any} = {name:"刘亦菲",age:"123",adrress:"北京"}
//number 不包含 string类型
//let obj6:{name:string,[propName:string]:number} = {name:"刘亦菲",age:123}


//只读属性 readonly, 前面readonly修饰，代表该属性只能访问不能修改，一个对象可以有多个只读属性
let obj6:{
    //name:"张三",//值类型，name属性值只能为 张三
    readonly name:string,
    like:string[],
    pet:{name:string,age:number}
    //任意属性,上面两个属性必须
    //[propName:string]:object
    [propName:string]:any
}

obj6={
    name:"hobart",
    like:["篮球","足球"],
    pet:{
        name:"旺财",
        age:6
    },
    girlFriend:{
        name:"刘亦菲",
        age:18
    }
}

//只读对象不能修改
//obj6.name = "345";



//内置对象
let boo3:Boolean = new Boolean(1);
let e3:Error = new Error("出错了~");
let d3:Date = new Date();
let r3:RegExp = /^[a-z]$/;
let body3:HTMLElement = document.body;
let allDiv3:NodeList = document.querySelectorAll("div");


//对象数组
let obj7:{name:string,age:number}[] = [{name:"tom",age:17},{name:"jack",age:17}]
