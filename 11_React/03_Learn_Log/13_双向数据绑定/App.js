import LogsForm from "./components/LogsForm/LogsForm";
import Logs from "./components/Logs/Logs";
import "./App.css";

const App = () =>{
    return (
        <div className="app">
            <LogsForm></LogsForm>
            <Logs/> 
        </div>
        
    )
}

export default App;