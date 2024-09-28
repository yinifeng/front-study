//数组和元组
let arr:string[] = ["123","2345"];

arr.push("abc");

//先声明再赋值
let arr2:number[];
arr2 = [123,456,98];

let arr3:boolean[] = [true,false];

//二维数组
let arr4:string[][] = [["abc","cd"],["df","wewe"]]

let arr5:any[] = [123,"abc",true]


//元组
//限定数据类型，同时规定了元素的个数，类型的顺序
let arr6:[string,boolean,number] = ["abc",true,123];
let vv:string = arr6[0];

let arr7:[string,number] = ["abc",123];


//如果后续通过任何方法向数组添加数据，也可以，后添加的数据是前面每个数据的联合类型
arr7.push("123");


let arr8:Array<string> = ["123","456"]


//对象数组
let arr9:{name:string,age:number}[] = [{name:"tom",age:17},{name:"jack",age:17}]
