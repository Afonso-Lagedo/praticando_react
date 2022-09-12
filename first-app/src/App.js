import TestName from "./components/name";

function App (){
  return(
    <div>
      <h1>Component App</h1>
      <Name/>
      <br/>
      <TestName person="Rafaela"/>
      <br/>
      <TestName person="Felipe"/>
    </div>
  );
}

export default App;


function Name(){
  return(
    <span>Name: Afonso</span>
  );
}