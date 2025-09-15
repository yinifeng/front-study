import React from 'react'
import LogItem from './LogItem/LogItem';
import "./Logs.css";

function Logs() {
  return (
    <div className='logs'>
      <LogItem></LogItem>
      <LogItem></LogItem>
      <LogItem></LogItem>
      <LogItem></LogItem>
      <LogItem></LogItem>
    </div>
  )
}

export default Logs;
