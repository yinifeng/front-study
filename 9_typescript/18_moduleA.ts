interface Person{
    name:string,
    age:number
}

type Student = {name:string,age:number}

//TS中导出，导出类型，建议加上type关键字

//全都是导出类型，type可以写在外层
// export type{Person,Student}
export {type Person,type Student}