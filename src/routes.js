import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Vagas from './pages/vagas/Vagas';
import Cv from './pages/cv/Cv';
import Quem from './pages/quemSomos/Quem';
import Fale from './pages/fale/Fale';



function Routes() {
    return ( 
        <BrowserRouter>
            <Switch >]
            <Route exact path ={['', '/']} component ={Home} /> 
            <Route path = "/vagas" component = {Vagas} />
            <Route path = "/curriculo" component = { Cv } />
            <Route path = "/quem-somos" component = {Quem} />
            <Route path = "/fale-conosco" component = {Fale} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

