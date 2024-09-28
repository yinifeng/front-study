//import {type Person,type Student} from "./18_moduleA.js";

//导入时 type类型，建议也加上type类型，可以省略模块化文件后缀，但是不能写.ts结尾，否则要修改ts编译配置文件
import {type Person,type Student} from "./18_moduleA";

//默认导出，导入时写在{}外面
import Animal,{a} from "./18_moduleB";

let xiaoMing18:Person = {name:"jack",age:19};