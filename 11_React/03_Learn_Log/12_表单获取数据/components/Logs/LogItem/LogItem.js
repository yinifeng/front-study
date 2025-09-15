import React from 'react'
import LogDate from './LogDate/LogDate';
import "./LogItem.css";
import Card from '../../UI/Card/Card';

function LogItem(props) {
  /* 
    通过props向子组件中传递数据
      - 只能父组件向子组件中传递参数，子组件不能向父组件传递参数
      - 父组件中传递属性，可以通过函数的参数获取到
      - props中的属性时只读的，不能修改，否则会报错
  */
  //console.log(props);

  //props.desc = "11";//报错

  //复用Card公共UI，圆角属性
  return (
    <Card className="item">
      {/* 数据传递到子子标签中 */}
      <LogDate date={props.date}></LogDate>
      <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
        </div>
    </Card>
  )
}

export default LogItem;