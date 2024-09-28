/* 
    Promise
        - Promise可以帮助我们解决异步中的回调函数的问题
        - Promise就是一个用来存储数据的容器
            它拥有着一套特殊的存取数据的方式
            这个方式使得它里边可以存储异步调用的结果

*/

//创建Promise
//创建Promise时，构造函数中需要一个函数作为参数
//Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递进去
const promise = new Promise((resolve,reject)=>{
    //resolve和reject是两个函数，通过这两个函数可以向Promise中存储数据
    //resolve在执行正常时存储数据，reject在执行错误时存储数据
    console.log(111);
    
    //resolve("哈哈");
    //reject("呵呵");

    //通过函数来向Promise中添加数据，好处就是可以用来添加异步调用数据

    //reject("数据错误！");
    //throw new Error("出错了！");

    setTimeout(function(){
        resolve("嘻嘻");
    },2000);

});
console.log(promise);
console.log("==========promise");

/* 
    从Promise中读取数据
        - 可以通过Promise的实例方法then来读取Promise中存储的数据
        - then需要两个回调函数作为参数，回调函数用来获取Promise中的数据
            通过resolve存储的数据，会调用第一个函数返回
                可以在第一个函数中编写处理数据的代码

            通过reject存储的数据或出现异常时，会调用第二哥函数返回
                可以在第二个函数中编写处理异常的代码    
*/
promise.then((result)=>{
    console.log("result: ",result);
},(reason)=>{
    console.log("reason: ",reason);
})

/* 
    Promise中维护了两个隐藏的属性
        PromiseResult
            - 用来存储数据

        PromiseState
            - 记录Promise的状态（三种状态）
                pedding （进行中）
                fulfilled (完成) 通过resolve存储数据时
                rejected （拒绝，出错了）出错了或通过reject存储数据时
            - PromiseState只能修改一次，修改以后永远不会再变
        
        流程：
            当Promise创建时，PromiseState初始值为pendding
                当通过resolve存储数据时，PromiseState变为fulfilled（完成）
                    PromiseResult变为存储的数据
                当通过reject存储数据或出错时 PromiseState变为rejected（拒绝，出错了）
                    PromiseResult变为存储的数据 或 异常对象
                    
            当我们通过then读取数据时，相当于为Promise设置了回调函数
                如果PromiseState变为fulfilled，则调用then的第一个回调函数来返回结果
                如果PromiseState变为rejected，则调用then的第二个回调函数来返回结果     
*/
//Promise.resolve("tom");
const promise2 = new Promise((resolve,reject)=>{
   //resolve("tom");
   reject("jack");
});

console.log(promise2);

// promise2.then((result)=>{
//     console.log("promise2 result: ",result);
// },(reason)=>{
//     console.log("promise2 reason: ",reason);
// })

/* 
    catch() 用法和then类似，但只需要一个回调函数作为参数
        catch()中的回调函数只会在Promise被拒绝时才调用
        catch()相当于then(null,reason =>{})
        catch()就是一个专门处理Promise异常的方法

    finally()
        - 无论是正常存储的数据还是出现异常了，finally总会被执行
        - 但是finally的回调函数中不会接收到数据
        - finally()通常用来编写一些无论成功与否都要执行的代码

*/

// promise2.catch(reason =>{
//     console.log("promise2 出错了: ",reason);
// });

promise2.finally(()=>{
    console.log("无论如何都会执行");
})

//上面的回调函数，都是在这些代码后面执行
console.log("学习Promise...");