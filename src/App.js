import './App.css';
import Header from './components/Header';
import Tasks from './Tasks';
import {useState, useRef, useEffect} from 'react';


function App() {
  const [task, setTask] = useState('');
  const inputEl = useRef(null);
  const handleChange = (e)=>{
    setTask(e.target.value);
    // console.log(e.target.value);
  }
  var [tasks, setTasks] = useState([{_id:1,header:'task1'},{_id:2,header:'task2'},{_id:3,header:'task3'}]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(task);
    tasks.push({_id: tasks.length+1, header: task});
    setTasks(tasks);
    console.log(tasks);
  }
  useEffect(()=>{},[tasks]);
  return (
    <div className="App">
      <Header />
      <input type="text" ref={inputEl} value={task} onChange={handleChange} />
      <button className='btn btn-submit' type='submit' onClick={handleSubmit}>submit</button>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
