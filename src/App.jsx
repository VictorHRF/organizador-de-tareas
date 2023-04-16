import './App.css'
import { TaskList } from './components/TaskList'
import { TimerList } from './components/TimerList'

function App() {

  return (
    <div className="App">
      <div className="component"><TimerList/></div>
      <div className="component"><TaskList/></div>      
    </div>
  )
}

export default App
