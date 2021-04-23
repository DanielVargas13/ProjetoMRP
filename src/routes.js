
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ItensLapiseira from './pages/itens-lapiseira';
import Periodos from './pages/periodos';
import MRP from './pages/mrp';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ItensLapiseira} />
                <Route path="/periodos" component={Periodos} />
                <Route path="/mrp" component={MRP} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;