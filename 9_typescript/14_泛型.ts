//泛型函数
function fanXin01<T>(a:T) {
    return a;
}


let value14:string = fanXin01<string>("abc");
//推断类型一定正确，如下案例
let value15:string = fanXin01("abc");

//数组泛型
function fanXin02<T>(arr1:T[],arr2:T[]):T[] {
    return arr1.concat(arr2);
}
//推断类型一定正确，如下案例,所以调用时指定类型
fanXin02<string|number>(["a","b"],[1,2]);

//多个泛型
function fanXin03<T,U>(a:T,b:U):T {
    return a;
}

fanXin03<number,string>(1,"abc");


//接口使用泛型
interface Person14<T,U> {
    name:U,
    age:T
}

let value16:Person14<number,string> = {name:"hobart",age:21}


//类使用泛型,ts的类和js类有差别
class PersonClass<T> {
    name:T
    age:number

    constructor(name:T,age:number) {
        this.name = name;
        this.age = age;
    }
}

let pclass = new PersonClass<string>("tom",16);


//使用泛型
//函数类型
fanXin01<()=>void>(()=> console.log(1));
//对象类型
fanXin01<Person14<number,string>>({name:"hobart",age:21});
//值类型
type MyType14 = "刘德华"|"张学友"|"郭富城";
fanXin01<MyType14>("张学友");


//泛型定义数组,Array是内置接口
let fanXin04:Array<number> = [12,13,14]

//类型别名使用泛型
type MyType15<T> = {value:T}
let myType15Obj:MyType15<number> = {value:15}


//函数案例
function fanXin05<T,U>(arr:T[],fn:((arg:T)=>U)):U[] {
    return arr.map(fn);
}

let value17:number[] = fanXin05<string,number>(["1","2","3"],(n)=> parseInt(n));

//5、泛型默认值
function fanXin06<T=string>(m:T) {
    return m;
}

//推断类型为数字覆盖默认类型，一般情况泛型默认类型使用class中
fanXin06(123);

//class中默认类型
class PersonClass02<T=string> {

    list:T[] = []

    add(a:T) {
        this.list.push(a);
    }
}

let xiaomin = new PersonClass02();
//默认类型生效，只能传string
//xiaomin.add(123);
xiaomin.add("abc");


//6、泛型限定
function fanXin07<T extends string>(a:T):T{
    console.log(a.length);
    return a;
}
fanXin07("a")

function fanXin08<T extends Person14<number,string>>(a:T){
    a.name;
    a.age;
}
fanXin08<{name:string,age:number}>({name:"hobart",age:21});
fanXin08({name:"hobart",age:21});

function fanXin09<T extends keyof U,U>(a:T,b:U){

}
//第一个参数只能 传 a b c
fanXin09("a",{a:1,b:2,c:3});

//泛型嵌套，和Java类似