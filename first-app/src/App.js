import {useState} from 'react';

function App (){

  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [age, setAge]= useState('');

  const [user, setUser] = useState({});

  function save(e){
    e.preventDefault();

    alert('Success');

    setUser({
      name:name,
      age:age,
      email:email,
    })
  }

  return(
    <div>
      <h1>Users</h1>

      <form onSubmit={save}>
        <input placeholder='name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <br></br>
        
        <input placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br></br>
        
        <input placeholder='age'
        value={age}
        onChange={(e)=>{setAge(e.target.value)}}
        />
        <br></br>

        <button type='submit'>Save</button>
      </form>
      <br></br>
      <div>
        <span>Welcome: {user.name}</span><br></br>
        <span>Age: {user.age}</span><br></br>
        <span>email: {user.email}</span>
      </div>
    </div>
  );
}

export default App;