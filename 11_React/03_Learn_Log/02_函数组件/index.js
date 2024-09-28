import ReactDOM from "react-dom/client";

/* 
    组件
        - React中组件有两种创建方式
            - 函数式组件（推荐）
                - 函数组件就是一个返回JSX的普通函数
                - 组件首字母必须大写
            - 类组件
*/

//函数组件,往往我们会把组件写在单独文件中，同时组件名和文件名保持一致
// function App() {
//     return <div>Hello Function Compoment</div>
// }

//导入外部独立的组件
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染函数式组件
//root.render(App());
root.render(<App/>);