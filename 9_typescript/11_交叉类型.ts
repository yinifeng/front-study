type Person11 = {name:string,age:number}

type Employe = {salary:number,address:string}

interface Weight{
    weight:number
}

//交叉类型
type Staff = Person11 & Employe & {height:number} & Weight;
let staff01:Staff = {
    name:"jack",
    age:18,
    salary:4000,
    address:"深圳",
    height:170,
    weight:120
}

//交叉类型不能对基本数据类型使用，一般都是对象
//type NStr = number & string;