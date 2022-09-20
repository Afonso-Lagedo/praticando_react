import {Link} from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <h2>Sobre</h2>
        <br/><br/>
        <Link to="/">Home</Link>
        <br/><br/>
        <Link to="/contatos">Contatos</Link>
      </div>
    );
  }
  
  export default Sobre;
  