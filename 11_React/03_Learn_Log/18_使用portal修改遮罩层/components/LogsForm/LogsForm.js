import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import "./LogsForm.css";

const LogsForm = (props) => {
  /* 
    当表单项发生变化获取数据
  */

  const [inputDate,setInputDate] = useState("");
  const [inputDesc,setInputDesc] = useState("");
  const [inputTime,setInputTime] = useState("");


  //创建一个响应函数，监听表单项发生变化
  const dateChangeHandler = (event)=>{
    //获取DOM对象 event.target
    //console.log(event.target);
    //获取DOM对象的值 event.target.value
    //console.log(event.target.value);
    setInputDate(event.target.value);
  }
  
  const descChangeHandler = (event)=>{
    setInputDesc(event.target.value);
  }
  
  const timeChangeHandler = (event)=>{
    setInputTime(event.target.value);
  } 

  const submitHandler = (event)=>{
    //取消form表单默认行为
    event.preventDefault();
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime
    }

    //从props中获取函数，进行回调
    props.onSaveLogs(newLog);

    //添加完表单后实现表单数据清空
    setInputDate("");
    setInputDesc("");
    setInputTime("");

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
          <input onChange={dateChangeHandler} value={inputDate} id="date" type="date" />
        </div>
        <div className='form-item'>
          <label htmlFor="desc">内容</label>
          <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text" />
        </div>
        <div className='form-item'>
          <label htmlFor="time">时间</label>
          <input onChange={timeChangeHandler} value={inputTime} id="time" type="number" />
        </div>
        <div className='form-btn'>
          <button onClick={submitHandler}>添加</button>
        </div>
      </form>
    </Card>
  )
}

export default LogsForm