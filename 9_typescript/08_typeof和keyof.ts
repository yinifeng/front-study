let type01 = 1;
type t01 = typeof type01;

let value01:t01 = 123;
//value01 = "abc";

let type02 ={name:"hobart",age:12}
type t02 = typeof type02;//{name:string,age:number}

let value02:t02 = {name:"刘德华",age:18};


let value03:typeof type02 = {name:"刘亦菲",age:18};


//keyof 接收对象类型，所有key的值类型
type t03 = {name:string,age:number,marry:boolean};
type t04 = keyof t03;// name|age|marry

let value04:t04 = "name";
value04= "age";
value04= "marry"; 
//value04= "123"; 
