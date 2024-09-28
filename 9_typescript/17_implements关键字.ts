interface PersonInterface01 {
    id:number,
    name:string,
    play():()=>void;
}

interface PersonInterface02 {
    gender:boolean
}

//一个类可以实现多个接口
class XiaoMing implements PersonInterface01,PersonInterface02 {
    id: number;
    name: string;
    gender: boolean;

    constructor(id: number,name: string,gender: boolean){
        this.id = id;
        this.name = name;
        this.gender = gender;
    }

    play():() => void{
        console.log("我爱打篮球");
        return;
    }
    
}