/* 
    Promise静态方法
        Promise.resolve() 创建一个立即完成的Promise
        Promise.reject() 创建一个立即拒绝的Promise
        Promise.all([...]) 同时返回多个Promise的执行结果
            其中一个报错，就返回错误
        Promise.allSettled([...]) 同时返回多个Promise的执行结果（无论成功或失败,结果为Promise对象）
            {status:'fulfilled',value:123}    
            {status:'rejected',reason:'错误'}    
        Promise.race([...]) 返回执行最快的Promise（不考虑对错）
        Promise.any([...]) 返回执行最快的完成的Promise，如果都没有完成，返回一个错误Promise
*/

//Promise.resolve("哈哈").then(r => console.log(r));
//Promise.reject("出错了").catch(r => console.log(r));

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

Promise.all([
    sum(100,45),
    //Promise.reject("出错了1"),
    sum(300,12),
    //Promise.reject("出错了2"),
    sum(600,33)
])
//执行结果没有错误，返回数组 [145, 312, 633]
.then(r => console.log("Promise.all.then: ",r))
//执行结果有错误，即使是多个，也只返回一个结果
.catch(r => console.log("Promise.all.catch: ",r));


Promise.allSettled([
    sum(100,45),
    Promise.reject("出错了1"),
    sum(300,12),
    Promise.reject("出错了2"),
    sum(600,33)
])
//执行结果没有错误，返回Promise数组 [{…}, {…}, {…}]
.then(r => console.log("Promise.allSettled.then: ",r))
//执行结果一定没有错误,都是返回的Promise对象，不会回调catch
.catch(r => console.log("Promise.allSettled.catch: ",r));


Promise.race([
    sum(100,45),
    Promise.reject("出错了1"),
    sum(300,12),
    Promise.reject("出错了2"),
    sum(600,33)
])
//返回执行最快的Promise
.then(r => console.log("Promise.race.then: ",r))
//有错误结果，回调catch
.catch(r => console.log("Promise.race.catch: ",r));



Promise.any([
    sum(100,45),
    Promise.reject("出错了1"),
    sum(300,12),
    Promise.reject("出错了2"),
    sum(600,33)
])
//返回执行最快的Promise，只要一个成功就返回成功的结果
.then(r => console.log("Promise.any.then: ",r))
//当所有的错误，才返回一个错误结果
.catch(r => console.log("Promise.any.catch: ",r));


console.log("执行顺序===========");

/**
 * 以下3个执行顺序为：
 *   33333   22222  11111
 *
 * 
 */
setTimeout(()=>{
    console.log(11111);
});

Promise.resolve().then(()=> console.log(22222));

console.log(33333);