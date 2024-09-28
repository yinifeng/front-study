//类型断言
 function assertFn01(m:string|number) {
    //类型断言 m as string
    (m as string).substring(1);
 }

 //assertFn01(100);

 //注意：类型断言只能欺骗ts编译器，让他不报错，无法避免项目运行时错误，所以断言要谨慎

 let assertObj01 = {} as {name:string};
 assertObj01.name = "张三";

 //将任何一个类断言成any
 let assertNum:number = 12;
 //将任何一个类断言成any,编译通过，运行报错
 console.log((assertNum as any).length)

 let assertAny:any = 12;
 //console.log((assertAny as number).length)


 //非空断言
type fn1201=()=>number;
 function assertFn02(m:fn1201|undefined) {
    //非空断言, ! ，m不为空才调用,编译时不报错，运行时还是看数据
    let num1 = m!();
    console.log(num1);
    let num2 = m();
 }

 assertFn02(undefined);

 //双重断言，不推荐这样写
 (assertNum  as any as string).length;

 