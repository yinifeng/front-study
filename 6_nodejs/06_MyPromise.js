/* 
    自定义封装Promise

*/

const PromiseStatus = {
    PEDDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}


class MyPromise{

    #result;

    #state = PromiseStatus.PEDDING;

    #callbacks = [];

    constructor(excutor) {
        //excutor回调函数对象
        excutor(this.#resolve.bind(this),this.#reject.bind(this));
    }

    #resolve(value) {
        if(this.#state !== PromiseStatus.PEDDING) {
            return;
        }
        this.#result = value;
        this.#state = PromiseStatus.FULFILLED;
        //console.log("#resolve: ",this);

        queueMicrotask(()=>{
            //this.#callback && this.#callback(this.#result);
            //调用callbacks中所有函数
            this.#callbacks.forEach(cb => {
                cb();
            })
        });
        
    }

    #reject(reason){
        if(this.#state !== PromiseStatus.PEDDING) {
            return;
        }
        this.#result = reason;
        this.#state = PromiseStatus.REJECTED;
        //console.log("#reject: ",this);
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve,reject) => {
            if(this.#state === PromiseStatus.PEDDING) {
                //this.#callback = onFulfilled;
                this.#callbacks.push(()=>{
                    resolve(onFulfilled(this.#result));
                });
            }else if(this.#state === PromiseStatus.FULFILLED) {
                queueMicrotask(()=>{
                    resolve(onFulfilled(this.#result));
                });
            }else {
                queueMicrotask(()=>{
                    reject(onRejected(this.#result));
                });
            }
        });
    }
}

const promise = new MyPromise((resolve,reject) => {
    //resolve("哈哈");

    setTimeout(function() {
       resolve("哈哈");
    },1000)
});

promise.then(r => {
    console.log("then: ",r);
    return "呵呵";
}).then(r => {
    console.log("then: ",r);
})

// promise.then(r => {
//     console.log("then: ",r);
// })

console.log("tes....");