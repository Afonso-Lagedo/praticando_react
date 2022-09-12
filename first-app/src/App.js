import {useState} from 'react';

import TestName from "./components/Name";

function App (){
  const [person, setPerson] = useState('Test'); //Test is initial State

  function changeName(){
    setPerson('Afonso');
  }

  return(
    <div>
      <h1>Component App</h1><br/>
      <h2>Hello: {person}</h2>
      <button onClick={changeName}>
        update name
      </button>
    </div>
  );
}

export default App;


function Name(){
  return(
    <span>Name: Afonso</span>
  );
}