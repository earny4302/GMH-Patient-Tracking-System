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
                        <h1>Medical Report</h1>                       
                                            
                    </div>
                    <div id="showpatHis" >                         
                            

                            <div id="patientinfobox">
                                <p>ID : </p>
                                <p>NAME : </p>
                                <p>AGE : </p>
                                <p>GENDER : </p>
                                <p>ADDRESS : </p>
                                <p>PHONE : </p>                        
                            </div>
                        </div>
                    </div>
                    <div id="showpat" >                       
                            
                        <img id="paticonbox" alt="tag" src="https://i.ibb.co/Th7ftBx/Whats-App-Image-2022-11-16-at-11-20-13-PM.jpg" style={{width:"30%"}}  ></img>
                            <div id="patientinfobox" style={{marginTop:"3%"}}>
                                <p>HID : </p>
                                <p>DATE : </p>
                                <p>TIME : </p>
                                <p>CONSULTED BY : </p>
                                <button id="but" style={{marginLeft:"35%", marginTop:"5%"}}>VIEW DETAILS</button>                       
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