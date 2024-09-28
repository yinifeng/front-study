//src/index.js 是js入口文件

//引入ReactDOM, React18后 react-dom/client
import ReactDOM from "react-dom/client";

//创建一个JSX
const App = <div>
    <h1>这是一个React项目</h1>
    <p>我终于有一个React项目了22222</p>
</div>;

//获取根容器
const root = ReactDOM.createRoot(document.getElementById("root"));
//将App渲染到根容器中
root.render(App);