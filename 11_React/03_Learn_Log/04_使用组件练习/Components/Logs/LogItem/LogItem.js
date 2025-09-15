import React from 'react'
import LogDate from './LogDate/LogDate';
import "./LogItem.css";

function LogItem() {
  return (
    <div className="item">
      <LogDate></LogDate>
      <div className="content">
            <h2 className="desc">学习React</h2>
            <div className="time">40分钟</div>
        </div>
    </div>
  )
}

export default LogItem;