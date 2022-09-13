import {useState, useEffect} from 'react';

function App (){

  const [input, setInput]= useState('');
  const [task, setTask] = useState([
    'first task',
    'second task'
  ]);

  useEffect(()=>{
    const taskStorage = localStorage.getItem('@task');

    if(taskStorage){
      setTask(JSON.parse(taskStorage));
    }
  },[])//login page execute function

  useEffect(()=>{
    localStorage.setItem('@task', JSON.stringify(task));
  },[task]);//if update TASK execute function

  function save(e){
    e.preventDefault();

    setTask([...task, input]);
    setInput('');
  }

  return(
    <div>
      <h1>Users</h1>

      <form onSubmit={save}>
        <input placeholder='task'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <br></br>

        <button type='submit'>Save</button>
      </form>
      <br></br>
      <div>
        <ul>
          {task.map( t =>(
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;