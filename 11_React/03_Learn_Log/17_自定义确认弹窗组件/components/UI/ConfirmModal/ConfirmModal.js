import React from 'react';
import Card from '../Card/Card';
import "./ConfirmModal.css";
import Backdrop from '../Backdrop/Backdrop';

/* 
    确认框公共UI组件
*/
const ConfirmModal = props => {
  /* 
    弹出确认框增加遮罩层，使后面按钮无法被点击
  */
  return (
    <Backdrop>
      <Card className='confirmModal'>
        <div className='confirmText'>
            <p>{props.confirmText}</p>
        </div>
        <div className='confirmButton'>
            <button onClick={props.onOk} className='okButton'>确认</button>
            <button onClick={props.onCancel}>取消</button>
        </div>
      </Card>
    </Backdrop>
  )
}

export default ConfirmModal;