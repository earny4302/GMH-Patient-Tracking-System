import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Wel from './component/sec'
import Home from './component/Home';
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
                    <Route exact path="/wel" component={Wel}/>
                    <Route exact path="/AddPatient" component={AddPatient}/>
                    <Route exact path="/tracker" component={Tracker}/>
                    <Route exact path="/medHistory/:patientid" component={MedHistory}/>
                    <Route exact path="/viewHis/:historyid" component={viewHis}/>
                    <Route exact path="/newConsult" component={newConsult}/>
                    
            </div>
        </BrowserRouter>
    )
}

export default Routing