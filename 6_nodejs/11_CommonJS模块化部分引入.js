//导入模块中部分内容

// const obj = require("./module/m3.js");
// console.log(obj);

//引入部分属性
// const name = require("./module/m3.js").name;
// console.log(name);

//结构负值
const {name,age,gender} = require("./module/m3.js");
console.log(name,age,gender);