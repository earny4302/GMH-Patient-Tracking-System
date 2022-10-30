import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Recep from './component/recep';
import Home from './component/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/recep" component={Recep}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing