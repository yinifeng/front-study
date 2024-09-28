import React, { Component } from 'react';
import "./App.css";
import User from './components/User';

/* 
  React 类组件
*/
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <User name="刘亦菲" age="18" gender="女"/>
      </div>
    )
  }
}

