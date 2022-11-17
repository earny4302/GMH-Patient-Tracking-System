import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Recep from './component/recep';
import Home from './component/Home';
import servicesRecep from './component/servicesRecep';
import AddPatient from './component/add_patient';
import Tracker from './component/tracker';
import MedHistory from './component/medHistory';
import viewHis from './component/viewHis'
import newConsult from './component/newConsult'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/recep" component={Recep}/>
                    <Route exact path="/servicesRecep" component={servicesRecep}/>
                    <Route exact path="/AddPatient" component={AddPatient}/>
                    <Route exact path="/tracker" component={Tracker}/>
                    <Route exact path="/medHistory/:patientid" component={MedHistory}/>
                    <Route exact path="/viewHis" component={viewHis}/>
                    <Route exact path="/newConsult" component={newConsult}/>
                    
            </div>
        </BrowserRouter>
    )
}

export default Routing