/* 
    通过async可以来创建一个异步函数
        异步函数的返回值会自动封装到一个Promise中返回

*/


//函数返回Promise
function fn() {
    return Promise.resolve(10);
}
//上面代码和下面代码等价
//async创建的函数返回的是Promise对象
async function fn2() {
    return 10;
}

//返回的Promise调用then获取函数
// fn().then(r => {
//     console.log("fn返回：",r);
// });

// const result = fn2();
// console.log(result);
// result.then(r => console.log("async fn2返回：",r));


/* 
    Promise解决了异步调用中回调函数问题
        虽然通过链式调用解决了回调地域，但是链式调用太多以后还是不好维护
*/
function sum(a, b) {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve(a + b);
        },1000);
    })
}
async function fn3() {
    // sum(100,1).then(r => {
    //     console.log(r);
    // });

    //这个写多了还是不好维护
    // sum(100, 1).then(r => sum(r, 2))
    //     .then(r => sum(r, 3))
    //     .then(r => console.log(r));

    //优化用await
    //当我们通过await去调用异步函数时，它会暂停代码的运行
    //直到异步代码执行有结果时，才会将结果返回
    //注意await只能用于async声明的异步函数中，或es模块的顶级作用域中
    //通过await调用异步代码时，需要通过try-catch来处理异常
    try{
        console.log("fn3: ","000");
        let result = await sum(100,1);
        result = await sum(result,2);
        result = await sum(result,3);
        //没加await返回的Promise对象，否则等待返回结果 101
        console.log("fn3: ",result);
        console.log("fn3: ","等待await结果后续代码执行....");
        console.log("fn3: ",123);
        console.log("fn3: ",456);
        console.log("fn3: ",789);
    }catch(e) {
        console.log("出错了...",e);
    }
}

// fn3();
// console.log("全局中输出~~~~");


/* 
//如果async声明的函数中没有写await，那么它里边就会依次执行
async function fn4() {
    //没加await 执行顺序：1 2 3 4 5
    console.log(1);

    // 当我们使用await调用函数后，当前函数后边的所有代码
    //         会在当前函数执行完毕后，被放入到微任务队列中
    //加await 执行顺序：1 2 5 3 4
    await console.log(2);
    //await后边的所有代码，都会放入到微任务队列中执行
    await console.log(3);
    console.log(4);
}

// fn4 和 fn5等价

function fn5() {
    return new Promise(resolve =>{
        console.log(1);
        //加了await
        console.log(2);
        //后边代码 放入到then中
        resolve();
    }).then(r => {
        console.log(3);
    }).then(r => {
        console.log(4);
    });
}

//fn4();
fn5();
console.log(5);
 */


//如果要在这里使用 await
// async function fn6() {
//     await console.log(123);
// }
// fn6();

//上面代码写法复杂，如果一定要这么使用await,可以使用立即执行函数

//上面代码优化以下写方法，当有错误，可能前面要加；号
(async () => {
    await console.log(123);
})();