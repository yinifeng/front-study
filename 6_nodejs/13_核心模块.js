/* 
    1、核心模块是node中自带的模块，可以在node中直接使用
    2、window是浏览器的宿主对象node中是没有的
    3、global是node中的全局对象，作用类似于window
    4、ES标准下，全局对象的标准名应该是globalThis
*/

console.log(global);
console.log(globalThis);
//node中global和globalThis是同一个对象
console.log(global === globalThis);

/* 
    核心模块
        process
            - 表示当前的node进程
            - 通过该对象可以获取进程的信息，或者对进程做各种操作
            - 如何使用
                1、process是一个全局变量，可以直接使用
                2、有哪些属性和方法：
                    process.exit()
                        - 结束当前进程，终止node
                    process.nextTick(callback[,...args])
                        - 将函数插入到 tick队列中
                        - tick队列中的代码，会在下一次事件循环之前执行
                            会在微任务队列和宏任务队列中任务之前执行
                        - node中独有，浏览器运行环境没有tick队列    
                        
                执行顺序：
                    调用栈
                    tick队列
                    微任务队列
                    宏任务队列        

*/

// console.log(111);
//结束当前进程
// process.exit();
// console.log(222);
// console.log(333);


//宏任务队列
setTimeout(() => {
    console.log(1);
},0)

//微任务队列
queueMicrotask(()=>{
    console.log(2);
});

//tick队列
process.nextTick(()=>{
    console.log(3);
})

//调用栈
console.log(4);//执行顺序：4 3 2 1