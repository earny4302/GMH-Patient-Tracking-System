import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Recep from "./recep";
import axios from 'axios';
import "./viewHis.css"

const dUrl = "http://localhost:7800/getdetails";

class viewHis extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientDetail:''
            
        }
        
    }


    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole">
                    <div id="headHis">                        
                        <h1>VIEW HISTORY</h1>                       
                                            
                    </div>
                    <div id="showpatHis" style={{height:"190px"}}>                         
                            

                            <div id="patientinfobox">
                            <p>HID : </p>
                                <p>DATE : </p>
                                <p>TIME : </p>
                                <p>CONSULTED BY : </p>                       
                            </div>
                        </div>
                    </div>
                    <div id="showpat2">                       
                            
                        <img id="paticonbox2" alt="tag" src="https://i.ibb.co/yfVckxg/insurance-1.png" style={{width:"30%"}}  ></img>
                            <div id="patientinfobox" style={{marginTop:"3%"}}>
                                <h2>GENERAL OBSERVATION</h2>
                                <p>Temperature : </p>
                                <p>Pulse Rate : </p>
                                <p>Blood Pressure : </p>
                                <p>SpO2 : </p>                                                     
                                <p>Symptoms : </p>
                                <p>Diagnosis : </p>
                                <p>Prescription : </p>
                                <p>Surgeries : </p>                                                     
                            </div>
                    </div>
                    
                    
                
                
                
                
            </>
        )

    }

    async componentDidMount() {

        let patid = this.props.match.params.patientid;
        sessionStorage.setItem('Patientid',patid)
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({PatientDetail:res.data})})

    }


    
}
export default viewHis;