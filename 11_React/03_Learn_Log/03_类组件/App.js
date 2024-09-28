import React from "react";


/* 
    类组件
        - 要继承 React.Component
        - 相较于函数组件，类组件的编写麻烦一些
            它的功能和函数组件大多数一样

*/
class App extends React.Component{

    //类组件中，必须添加一个render()方法，且方法的返回值要是一个jsx
    render(){
        return <div>我是一个类组件</div>
    }
}

export default App;