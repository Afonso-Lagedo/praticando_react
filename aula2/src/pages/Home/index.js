import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <br/><br/>
        <Link to ="/sobre">Sobre</Link>
        <br/><br/>
        <Link to ="/contatos">Contatos</Link>

        <hr/>
        <Link to="/produtos/123456">Acesso Produto 123</Link>
      </div>
    );
  }
  
  export default Home;
  