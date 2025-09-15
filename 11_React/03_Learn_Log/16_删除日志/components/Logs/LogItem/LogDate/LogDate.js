import React from 'react';
import "./LogDate.css";

function LogDate(props) {
  //获取月份
  const month = props.date.toLocaleString("zh-CN",{month:"long"});
  //获取日期
  const day = props.date.getDate();
  /* 
    JSX中推荐不要写很复杂的逻辑，尽量在上面把数据组装好，然后交给JSX渲染
  */
  return (
        <div className="date">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
        </div>
  )
}

export default LogDate;