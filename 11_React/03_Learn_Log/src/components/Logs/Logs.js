import React, { useState } from 'react'
import LogItem from './LogItem/LogItem';
import "./Logs.css";
import Card from '../UI/Card/Card';
import LogFilter from './LogFilter/LogFilter';

function Logs(props) {

  const [year,setYear] = useState(2024);

  const filterLogsData = props.logsData.filter(item => item.date.getFullYear() === year);

  let logsItems = filterLogsData.map((item,index) => 
      <LogItem onDelLogsData={()=> props.onDelLogsData(item.id)} 
        key={item.id} date={item.date} 
        desc={item.desc} time={item.time} 
      />
    );

  if(logsItems.length === 0) {
    logsItems = <p className='no-logs'>没有找到日志！</p>;
  }
  
  const changeYearHandler = (year)=>{
    //console.log("切换的年份：",year)
    setYear(year);
  }
  
  //复用Card公共UI，圆角属性
  return (
    <Card className='logs'>
      <LogFilter year={year} changeYear={changeYearHandler}></LogFilter>
      {logsItems}
    </Card>
  )
}

export default Logs;
