import React, { useState } from 'react'
import LogDate from './LogDate/LogDate';
import "./LogItem.css";
import Card from '../../UI/Card/Card';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';

function LogItem(props) {
  /* 
    通过props向子组件中传递数据
      - 只能父组件向子组件中传递参数，子组件不能向父组件传递参数
      - 父组件中传递属性，可以通过函数的参数获取到
      - props中的属性时只读的，不能修改，否则会报错
  */
  //console.log(props);

  const [confirm,setConfirm] = useState(false);

  //删除事件
  const deleteItemHandler = ()=>{
    //const isDel = window.confirm("该操作不可恢复，确认吗？");
    //对logsData操作
    //if(isDel) {
    //  //确认删除
    //  props.onDelLogsData();
    //}
    setConfirm(true);
  }

  const onOkHandler = ()=>{
    props.onDelLogsData();
  }

  const onCancelHandler = ()=>{
    setConfirm(false);
  }

  //复用Card公共UI，圆角属性
  return (
    <Card className="item">
      {/* 自定义确认窗口 */}
      {confirm && <ConfirmModal confirmText={"该操作不可恢复！2确认吗？"} onCancel={onCancelHandler} onOk={onOkHandler} />}

      {/* 数据传递到子子标签中 */}
      <LogDate date={props.date}></LogDate>
      <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}分钟</div>
      </div>

      {/* 删除按钮 */}
      <div>
        <div onClick={deleteItemHandler} className='delete'>×</div>
      </div>
    </Card>
  )
}

export default LogItem;