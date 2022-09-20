import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> }/>
                <Route path="/contatos" element={ <Contatos/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;