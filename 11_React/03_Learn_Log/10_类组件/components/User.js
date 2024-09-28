import React, { Component } from 'react'

export default class User extends Component {
  /* 
    类组件的props是存储到类的实例对象中
        可以直接通过实例对象访问
        this.props
    类组件中state统一存储到了实例对象的state属性中
        可以通过this.state来访问
        通过this.setState()对其进行修改
    函数组件中，响应函数直接以函数的形式定义在组件中，
        但是在类组件中，响应函数是以类的方法来定义，之前的属性都会保留
        但是这你仅限于直接state的属性，像obj的属性就不会保留
        
    获取DOM对象
        1、创建一个属性，用来存储DOM对象
            divRef = React.createRef();
        2、这个属性设置为指定元素的ref值        
  
  */

  //创建属性存储DOM对象
  divRef = React.createRef();      
  //divRef = {current:null};      
 
  //state属性，存储变换的对象
  state = {
    count:1,
    test:"哈哈",
    obj:{name:"hobart",age:19}
  };
  
  //类组件一定要箭头函数，因为this指向问题
  addCount = () => {
    //this.setState({count:this.state.count + 1});
    //this.setState(preState => {
    //    return {count:preState.count + 1}
    //});
    //只修改name其他属性不会保留，需要浅拷贝
    this.setState({obj:{...this.state.obj,name:"tom"}});
  };

  render() {
    console.log(this.props);
    console.log(this.divRef);

    return (
      <div ref={this.divRef}>
        <h1>{this.state.count}---{this.state.test}</h1>
        <h1>{this.state.obj.name}---{this.state.obj.age}</h1>
        <button onClick={this.addCount}>+</button>
        <ul>
            <li>姓名：{this.props.name}</li>
            <li>年龄：{this.props.age}</li>
            <li>性别：{this.props.gender}</li>
        </ul>
      </div>
    )
  }
}
