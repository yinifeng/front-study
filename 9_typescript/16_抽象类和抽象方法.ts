//抽象方法和 抽象类 和 java写法类似

abstract class MyAbstractClass {

    abstract eat():void;

    abstract sleep():void;

    run():void{
        console.log("我爱跑步");
    }
}

//抽象不用实现 父类抽象方法
abstract class MyAbstractClass02 extends MyAbstractClass{

}

class MyAbstractClass03 extends MyAbstractClass{

    eat(): void {
        console.log("我爱吃饭");
    }

    sleep(): void {
        console.log("我爱睡觉");
    }
    
}