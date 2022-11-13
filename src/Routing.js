import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Recep from './component/recep';
import Home from './component/Home';
import servicesRecep from './component/servicesRecep';
import AddPatient from './component/add_patient';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/recep" component={Recep}/>
                    <Route exact path="/servicesRecep" component={servicesRecep}/>
                    <Route exact path="/AddPatient" component={AddPatient}/>
                    
            </div>
        </BrowserRouter>
    )
}

export default Routing