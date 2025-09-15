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


  /* 
    portal
      - 组件默认会作为父组件的后代渲染到页面中
        但是有些情况下，这种方式会带来一些问题
      - 通过portal可以将组件渲染到页面中的指定位置
      - 使用方法：
        1、在index.html添加一个新的元素
        2、修改组件渲染模式
          - 通过ReactDOM.createPortal()作为返回值创建元素
          - 参数：
            1、jsx（修改前return后的代码）
            2、目标位置（DOM元素）  
  
  */

  //复用Card公共UI，圆角属性
  return (
    <Card className="item">
      {/* 自定义确认窗口，这个是子元素，在某些场景会有问题，推荐使用protal解决 */}
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