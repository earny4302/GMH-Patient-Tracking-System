import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Recep from "./recep";
import axios from 'axios';
import "./medHistory.css"
import HisDisplay from "./hisDisplay"

const dUrl = "http://localhost:7800/getdetails";

class MedHistory extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientDetail:''
            
        }
        
    }


    render(){
        let {PatientDetail} = this.state
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole" key={PatientDetail._id}>
                    <div id="headHis">                        
                        <h1>Medical History</h1>                       
                                            
                    </div>
                    <div id="showpatHis" >                         
                            

                            <div id="infobox">
                                <p>ID : {PatientDetail.pid}</p>
                                <p>NAME : {PatientDetail.name}</p>
                                <p>AGE : {PatientDetail.age}</p>
                                <p>GENDER : {PatientDetail.gender}</p>
                                <p>ADDRESS : {PatientDetail.address}</p>
                                <p>PHONE : {PatientDetail.phone}</p>                        
                            </div>
                        </div>
                    </div>
                    <HisDisplay hisData={PatientDetail.history}/>
                    <button id="but" style={{marginLeft:"55%", marginTop:"5%", width:"20%",height:"50px"}}>NEW CONSULT</button>
                    
                
                
                
                
            </>
        )

    }

    async componentDidMount() {

        let patid = this.props.match.params.patientid;
        sessionStorage.setItem('Patientid',patid)
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({PatientDetail:res.data[0]})})


    }


    
}
export default MedHistory;