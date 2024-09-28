/* 
    Promise 处理异步结果

*/

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

//通过Promise获取异步调用的结果
sum(100, 200).then(result => {
    console.log(result);
});

//这样处理多异步结果还是不推荐
// sum(100,200).then(result =>{
//     sum(result,300).then(result =>{
//         sum(result,400).then(result =>{
//             console.log(result);
//         });
//     });
// });


/* 
    Promise的3个方法
        then() 返回值会存储新的Promise中
        catch() 返回值会存储新的Promise中
        finally() 的返回值不会存储到新的Promise中
        都会返回新的Promise

*/

const promise2 = new Promise((resolve, reject) => {
    resolve("床前明月光");
});

/*
const promise3 = promise2.then(result => {
    console.log(result);
    return "疑似地上霜";
});

const promise4 = promise3.then(result => {
    console.log(result);
    return "举头望明月";
});

promise4.then(result => {
    console.log(result);
});
*/

//更优雅的写法，Promise链式调用
promise2.then(result => {
    console.log(result);
    return "疑似地上霜";
}).then(result => {
    console.log(result);
    return "举头望明月";
}).then(result => {
    console.log(result);
});


sum(100, 200)
    .then(result => result + 300)
    .then(result => result + 400)
    .then(result => console.log(result));


const promise = new Promise((resolve, reject) => {
    //resolve("我是Promise");
    reject("我是Promise");
});

//链式调用
promise.then(r => {
    //promise resolve执行这个回调,否则跳过回调
    console.log("第一次then：", r);
    return "哈哈";
})
.catch(r => {
    //promise reject或异常 执行这个回调,否则跳过回调
    console.log("第一次catch：", r);
    return "嘻嘻";
})    
.then(r => console.log("最终执行结果：", r));