import {useState} from "react";
import "./App.css";

const App = () =>{

    /* 
        在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
            - 要使的组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染
            - 这里我们需要一个特殊的变量，当这个变量被修改时，组件会自动重新渲染

        state相当于一个变量
            只是这个变量在React中进行了注册
            React会监控这个变量的变化，当state发生变化时，会自动触发组件的重新渲染
            使得我们的修改可以在页面呈现出来
            
        在函数组件中，我们需要通过钩子函数，获取state （所有钩子函数在React都是以use开头）  
        
        
        useState(初始值)：
            它需要一个值作为参数，这个值就是state的初始值
                该函数会返回一个数组
                    数组中第一个元素，是初始值
                        - 初始值只用来显示数据，直接修改不会触发组件的重新渲染
                    数组中的第二个元素，是一个函数，通常会命名为setXXX
                        - 这个函数用来修改state，调用其修改state后会触发组件的重新渲染 
                            并且使用函数中的值作为新的state值   
    */
   
    //const result = useState(1); 
    //console.log(result);//[初始值, 回调函数]                 
    //let counter = result[0];
    //const setCounter = result[1];

    //上面简写成
    const [counter,setCounter] = useState(1);

    const lessHandler = ()=>{
        //alert("-");
        //counter--;

        setCounter(counter - 1);

        //console.log(counter);
    }

    const addHandler = ()=>{
        //alert("+");
        //counter++;

        setCounter(counter + 1);

        //console.log(counter);
    }

    return (<div className="app">
        <h1>{counter}</h1>
        <button onClick={lessHandler}>-</button>
        <button onClick={addHandler}>+</button>
    </div>)
}

export default App;