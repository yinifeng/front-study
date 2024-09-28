//1、联合类型映射
type Keys = "x"|"y"|"z"
//type MyType01 = {x:number,y:number,z:number}
//上面的 可以用映射类型定义
type MyType01 = {[key in Keys]:number}//{x:number,y:number,z:number}
let ys01:MyType01 = {x:1,y:2,z:3}

//2、对象类型映射，keyof Keys02 生成联合类型
type Keys02 = {a:number,b:string,c:boolean}
//可以配合只读 属性使用，可以配合 可选属性使用
//type MyType02 = {[k in keyof Keys02]:Keys02[k]}//{a:number,b:string,c:boolean}
//可选属性使用
//type MyType02 = {[k in keyof Keys02]?:Keys02[k]}//{a:number,b:string,c:boolean}
//只读 属性使用
type MyType02 = {readonly [k in keyof Keys02]:Keys02[k]}//{a:number,b:string,c:boolean}

let ys02:MyType02 = {a:1,b:"hello",c:true}