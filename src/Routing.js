import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing