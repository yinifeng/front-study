import LogsForm from "./components/LogsForm/LogsForm";
import Logs from "./components/Logs/Logs";
import "./App.css";
import { useState } from "react";

const App = () =>{

    //需要state，数据变化才能触发Logs组件刷新
    const [logsData,setLogsData] = useState([
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
    ]); 

    const saveLogHandler = (newLog)=>{
      console.log("App.js---->",newLog);
      
      setLogsData([...logsData,{
        ...newLog,
        id: Date.now() + ""
      }]);
    }  


    return (
        <div className="app">
            <LogsForm onSaveLogs={saveLogHandler}></LogsForm>
            <Logs logsData={logsData}/> 
        </div>
        
    )
}

export default App;