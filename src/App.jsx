import './App.css'
import { TaskList } from './components/TaskList'
import { Pomodoros } from './components/Pomodoros';

function App() {

  return (
    <div className="App">
      <div className="component"><Pomodoros /></div>
      <div className="component"><TaskList /></div>      
    </div>
  )
}

export default App
