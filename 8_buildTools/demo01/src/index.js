/* 
    src源码目录编写前端代码，需要在浏览器中运行，所以使用ES6模块化
*/
// 直接将css引入到js中
import "./style/index.css";
// 引入图片
import NingNing from "./assets/ning.jpg";

console.log("Hello Webpack");

document.body.insertAdjacentHTML(
    "beforeend",
    "<h1>今天天气真不错，风才12314145级！</h1>"
)

document.body.insertAdjacentHTML("beforeend", `<img src="${NingNing}" />`);

document.body.onclick = () => {
    alert("你点我干嘛！")
}