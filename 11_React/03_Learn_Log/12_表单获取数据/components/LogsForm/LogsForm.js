import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import "./LogsForm.css";

const LogsForm = () => {
  /* 
    当表单项发生变化获取数据
  */

  let inputDate = "";
  let inputDesc = "";
  let inputTime = 0;


  //创建一个响应函数，监听表单项发生变化
  const dateChangeHandler = (event)=>{
    //获取DOM对象 event.target
    //console.log(event.target);
    //获取DOM对象的值 event.target.value
    //console.log(event.target.value);

    inputDate = event.target.value;
  }
  
  const descChangeHandler = (event)=>{
    //console.log(event.target.value);
    inputDesc = event.target.value;
  }
  
  const timeChangeHandler = (event)=>{
    //console.log(event.target.value);
    inputTime = event.target.value;
  } 

  const submitHandler = (event)=>{
    //取消form表单默认行为
    event.preventDefault();
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime
    }
    console.log(newLog);

    /* 
      提交表单后如何清空表单中的旧数据
        现在这种表单，在React我们称为非受控组件

      我们可以将表单中的数据存储到state中
        然后将state设置为表单项value值，
        这样当表单发生变化，表单项也会跟着改变，这种操作我们就称为双向数据绑定
        这样一来，表单就成为一个受控组件  
    */
  }

  return (
    <Card className='log-form'>
      <form>
        <div className='form-item'>
          <label htmlFor="date">日期</label>
          <input onChange={dateChangeHandler} id="date" type="date" />
        </div>
        <div className='form-item'>
          <label htmlFor="desc">内容</label>
          <input onChange={descChangeHandler} id="desc" type="text" />
        </div>
        <div className='form-item'>
          <label htmlFor="time">时间</label>
          <input onChange={timeChangeHandler} id="time" type="number" />
        </div>
        <div className='form-btn'>
          <button onClick={submitHandler}>添加</button>
        </div>
      </form>
    </Card>
  )
}

export default LogsForm