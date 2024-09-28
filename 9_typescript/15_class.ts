//ts定义class

class MyClass001 {
    //实例属性
    name:string = "hobart";
    age:number;

    constructor(name:string,age:number) {
        //和es6区别，需要显示定义属性
        this.name = name;
        this.age = age;
    }

    //静态属性,只能通过类名访问修改，对象实例访问不到
    static count:number = 1;

    //只能读，不能修改
    readonly sex:string = "girl";

    //实例方法
    eat() {
        console.log("我在吃水果");
    }

    //静态方法
    static sleep() {
        console.log("我在睡觉");
    }
}

let myClassValue = new MyClass001("jack",18);
myClassValue.eat();
MyClass001.sleep();


//关于class继承，和es6类似
class AnimalClass {
    name:string;
    age:number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("我在吃食物");
    }
}

class DogClass extends AnimalClass {

    gender:string;

    constructor(name:string,age:number,gender:string) {
        super(name,age);
        this.gender = gender;
    }

    //重写方法
    eat() {
        console.log("我在吃骨头");
    }
}

let dogClass= new DogClass("旺财",2,"男");
dogClass.eat();


//访问修饰符，pubilc private protected  和java类似

class MyClass002 {

    // //默认是public
    // public name:string;

    // private age:number;

    // constructor(name:string,age:number) {
    //     //和es6区别，需要显示定义属性
    //     this.name = name;
    //     this.age = age;
    // }

    //前面带修饰符，就不要显示定义属性了，支持这种写法，推荐前面的写法
    constructor(private name:string,private age:number) {
        //和es6区别，需要显示定义属性
        this.name = name;
        this.age = age;
    }

    //实例方法，默认为public修饰
    public eat() {
        console.log("我在吃水果");
    }
    
    //静态方法
    private static sleep() {
        console.log("我在睡觉");
    }
}

new MyClass002("tom",18).eat();

//抽象类
