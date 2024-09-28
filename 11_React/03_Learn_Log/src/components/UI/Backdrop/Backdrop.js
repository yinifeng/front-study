import React from 'react';
import "./Backdrop.css";
import ReactDOM from "react-dom";

/* 
    遮罩层UI
*/

//获取backdrop根元素
const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = props => {
  // return (
  //   <div className='backdrop'>
  //       {props.children}
  //   </div>
  // )

  return ReactDOM.createPortal(<div className='backdrop'>
         {props.children}
     </div>, backdropRoot);
}
export default Backdrop