import React from 'react'

function App() {

    const clickHandler = (event) => {
        //event经过React包装的事件对象，并不是DOM的event对象
        console.log(event);

        //取消默认行为,a标签不会跳转
        event.preventDefault();

        //取消事件冒泡，点击 "点我一下" 按钮，事件会冒泡给div，怎么取消事件冒泡
        event.stopPropagation();


        alert("我是App中的clickHandler");
        /* 
            React中，无法通过return false取消默认行为
            return false;

            事件对象：
                - React事件中同样会传递事件对象，可以响应函数中定义参数来接收事件对象
                - React中的事件对象同样并不是我们原生事件对象，是经过React包装后的事件对象
                - 由于对象进行过包装，所以使用过程中，无需再考虑兼容性问题

            
        */
    }



    return (
        <div style={{width:400,height:400,margin:'100px auto',backgroundColor:"yellowgreen"}}
            onClick={()=>{alert("我是一个APP")}}
        >

            <button onClick={clickHandler}>点我一下</button>
            <button onClick={()=>{alert("哈哈");}}>哈哈</button>
            <br />
            <a href='https://www.baidu.com' onClick={clickHandler}>我是一个超链接</a>
        </div>
    )
}

export default App;