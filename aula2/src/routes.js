import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> }/>
                <Route path="/contatos" element={ <Contatos/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;