import {Link} from 'react-router-dom';

function Contatos() {
    return (
      <div>
        <h2>Contatos</h2>
        <br/><br/>
        <Link to ="/sobre">Sobre</Link>
        <br/><br/>
        <Link to="/">Home</Link>
      </div>
    );
  }
  
  export default Contatos;
  