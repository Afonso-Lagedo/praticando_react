import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <br/><br/>
        <Link to ="/sobre">Sobre</Link>
        <br/><br/>
        <Link to ="/contatos">Contatos</Link>
      </div>
    );
  }
  
  export default Home;
  