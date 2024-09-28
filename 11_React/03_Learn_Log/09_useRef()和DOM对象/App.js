import {useRef, useState} from 'react';
import "./App.css";

let temp;

const App = () =>{

    /* 
        React中获取原生DOM对象
            1、可以使用原生的document来对DOM进行操作
            2、直接从React中获取DOM对象
                步骤：
                    1、创建一个存储DOM对象容器
                        - 使用useRef()钩子函数
                            钩子函数的注意事项：
                                1、React中的钩子函数只能用于函数组件或自定义钩子函数中
                                2、钩子函数只能直接在函数组件中调用
                    3、将容器设置为想要获取DOM对象元素的Ref属性
                        <h1 ref={xxx}>...</h1>
                        React会自动将当前元素的DOM对象，设置为容器current属性 
        
        useRef()
            - 返回的就是一个普通的JS对象
            - {current:undefined}
            - 所以我们创建一个js对象，也可以代替useRef()
            - 区别：
                我们创建的对象，组件每次重新渲染都会创建一个新对象
                useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象
                
            - 当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()

            - 获取DOM对象不是非得用useRef(),通常建议使用useRef()获取DOM对象

            - 尽量在React中操作DOM对象只读取数据，不要修改数据

    */

    const h1Ref = useRef();
    //const h1Ref = {current:null};

    console.log(temp === h1Ref);
    //useRef() 返回对象，组件重新渲染还是同一个一个对象
    //我们创建的对象,每次渲染组件，都不是同一个对象
    temp = h1Ref;

    const [couter,setCouter] = useState(1);

    const clickHandler = () =>{
        //原生获取 DOM对象
        const h1 =document.getElementById("header");
        //console.log(h1);
        //alert(h1);
        console.log(h1Ref);
        console.log(h1Ref.current === h1);
        alert(h1Ref.current);
        h1Ref.current.innerHTML = "嘿嘿";
    }

    const addCouter = () =>{
        setCouter(couter => couter + 1);
    }

    return (<div className="app">
        <h1 id="header" ref={h1Ref}>我是一个标题{couter}</h1>
        <button onClick={clickHandler}>1</button>
        <button onClick={addCouter}>2</button>
    </div>)
}

export default App;