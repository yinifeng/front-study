import React from 'react'
import LogItem from './LogItem/LogItem';
import "./Logs.css";
import Card from '../UI/Card/Card';

function Logs(props) {
  //const logsItems = logsData.map(item => <LogItem {...item} />);
  const logsItems = props.logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);
  
  //复用Card公共UI，圆角属性
  return (
    <Card className='logs'>
      {/* 在父组件可以向子组件中设置属性 */}
      {/* <LogItem test="123" obj={{name:"hobart",age:18}} fn={()=>{console.log("LogItem Haha")}}></LogItem> */}
      {/* <LogItem date={new Date(2022,9,7,17,35)} desc={"学习Java"} time={120}></LogItem> */}

      {logsItems}
    </Card>
  )
}

export default Logs;
