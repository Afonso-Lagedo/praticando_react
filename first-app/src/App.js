import {useState} from 'react';

function App (){

  const [input, setInput]= useState('');
  const [task, setTask] = useState([
    'first task',
    'second task'
  ]);

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