import React from 'react';

const LogFilter = props => {

  const changeValue= e =>{
    props.changeYear(+e.target.value);
  }  

  return (
    <div>
        年份: <select onChange={changeValue} value={props.year}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>
  )
}

export default LogFilter