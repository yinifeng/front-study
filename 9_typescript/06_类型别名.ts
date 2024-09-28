//声明类型别名，定义的类型比较复杂，才会用类型别名
type myType = {name:string,age:number,hobby:string[],run:(()=>void)}

let ta01:myType = {
    name:"hoabrt",
    age:18,
    hobby:["篮球","足球"],
    run:function(){
        console.log("我爱跑步");
    }
}

let ta02:myType = {
    name:"hoabrt",
    age:18,
    hobby:["篮球","足球"],
    run:function(){
        console.log("我爱跑步");
    }
}


type myValue="hoabrt"|"刘德华";
//只能赋值  hoabrt 刘德华
let ta03:myValue = "刘德华";

type myType2 = myType|myValue|number
let ta04:myType2 = 1;