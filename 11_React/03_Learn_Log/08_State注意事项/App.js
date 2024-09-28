import {useState} from "react";
import "./App.css";

const App = () =>{
    console.log("函数执行了-->组件渲染完毕！");
    /* 
        state
            - state实际就是一个被React管理的变量
                当我们通过setState()修改变量的值时，会触发组件的自动重新渲染
            - 只有state值发生变化时，组件才会重新渲染
            - 当state的值是一个对象时，修改时是使用新的对象去替换已有对象
            - 当通过setState去修改一个state时，并不表示修改当前的state
                它修改的是组件下一次渲染时的state值
            - setState()会触发组件的重新渲染，它是异步的
                所以当调用setState()需要用旧state的值时，一定要注意
                有可能出现计算错误情况
                为了避免这种情况，可以通过为setState()传递回调函数的形式来修改state        
    
    */
    const [counter,setCounter] = useState(1);

    const [user,updateUser] = useState({name:"hobart",age:18});

    const setState = ()=>{

        //下面优化渲染只触发一次渲染，渲染最后结果就是8
        //setCounter(counter + 1);
        //setCounter(counter + 2);
        //setCounter(counter + 3);
        //setCounter(counter + 6);
        //setCounter(counter + 7);

        //防止短时间内重复点击取不到最新的值,使用回调函数
        setCounter(preCounter => preCounter + 1);
    }

    const updateUserHandler = ()=>{
        //user.name = 21
        //updateUser(user);//对象地址未发生变化，不会触发重新渲染

        //浅拷贝
        //const newUser = Object.assign({},user);
        //newUser.name = "刘德华";
        //updateUser(newUser);

        //上面优化简写
        updateUser({...user,name:"张学友"});
    }

    return (<div className="app">
        <h1>{counter}--{user.name}--{user.age}</h1>
        <button onClick={setState}>1</button>
        <button onClick={updateUserHandler}>2</button>
    </div>)
}

export default App;