//联合类型
let lh1:string|number|(()=>void) = 1;
lh1 = "abc";

//数组包含 字符串和数字类型
let lh2:(string|number)[] = [1,"2"]

let lh3:string[]|number[] = ["a","b"]
lh3 = [1,2,3]