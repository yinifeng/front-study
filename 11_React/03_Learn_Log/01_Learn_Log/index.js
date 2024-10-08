import ReactDOM from "react-dom/client";
//引入样式文件
import "./index.css";

//创建React元素
const App = <div className="logs">
    {/* 日志的容器 */}
    <div className="item">
        {/* 日期的容器 */}
        <div className="date">
            <div className="month">四月</div>
            <div className="day">19</div>
        </div>
        {/* 日志内容容器 */}
        <div className="content">
            <h2 className="desc">学习React</h2>
            <div className="time">40分钟</div>
        </div>
    </div> 
</div>

//获取根节点
const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染元素
root.render(App);