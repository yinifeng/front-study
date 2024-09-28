import React from 'react';
import "./Backdrop.css";

/* 
    遮罩层UI
*/
const Backdrop = props => {
  return (
    <div className='backdrop'>
        {props.children}
    </div>
  )
}
export default Backdrop