import React from 'react'
import LogItem from './LogItem/LogItem';
import "./Logs.css";
import Card from '../UI/Card/Card';

function Logs() {

  const logsData = [
    {
      id:"001",
      date:new Date(2021,4,2,17,35),
      desc:"学习降龙十八掌",
      time:40
    },
    {
      id:"002",
      date:new Date(2022,11,23,17,35),
      desc:"学习九阳神功",
      time:20
    },
    {
      id:"003",
      date:new Date(2023,8,13,17,35),
      desc:"学习易筋经",
      time:90
    },
    {
      id:"004",
      date:new Date(2024,6,20,17,35),
      desc:"学习六脉神剑",
      time:60
    }
  ];

  //const logsItems = logsData.map(item => <LogItem {...item} />);
  const logsItems = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);
  
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
