//namespace 官方基本不推荐使用（使用es6模块化）。只是老项目可能存在
//namespace 只是提供一个独立的作用域

namespace Utils{

    export function fn11() {
        console.log("hello");
    }

    //不加export，只能在namespace中使用
    fn11();
}

// 直接无法使用
//fn11();

//需要使用，需要导出
Utils.fn11();


//namespace嵌套
namespace MyNamespace {
    export namespace Girl {
        export function angry() {
            console.log("我爱生气");
        }
    }
}

MyNamespace.Girl.angry();