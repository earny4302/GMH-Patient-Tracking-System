import React,{Component} from 'react';

import Recep from "./recep";
import axios from 'axios';
import "./viewHis.css"

// const dUrl = "http://localhost:7800/getdetails";
const dUrl = "https://patient2-api.onrender.com/getdetails";

class viewHis extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientDetail:'',
            MedReport:''
            
        }
        
    }


    render(){
        let {PatientDetail} = this.state
        let {MedReport} = this.state
        // sessionStorage.setItem('History',his)
        let hisid = sessionStorage.getItem('HistoryID')
        
        // let point = Number(hisid)-1
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole" key={PatientDetail._id}>
                    <div id="headHis">                        
                        <h1>VIEW HISTORY</h1>                       
                                            
                    </div>
                    <div id="showpatHis" style={{height:"190px"}}>                         
                            

                            <div id="patientinfobox" style={{width:"100%"}}>
                                <p>HID : {hisid}</p>
                                <p>DATE : {PatientDetail.date}</p>
                                <p>TIME : {PatientDetail.time}</p>
                                <p>CONSULTED BY : {PatientDetail.doctorName}</p>                       
                            </div>
                        </div>
                    </div>
                    <div id="showpat2">                       
                            
                        <img id="paticonbox2" alt="tag" src="https://i.ibb.co/yfVckxg/insurance-1.png" style={{width:"33%"}}  ></img>
                            <div id="patientinfobox" style={{marginTop:"3%",width:"60%"}}>
                                <h2 id="subhead">GENERAL OBSERVATION</h2>
                                <p>Temperature : {MedReport.temp}</p>
                                <p>Pulse Rate : {MedReport.pulse}</p>
                                <p>Blood Pressure : {MedReport.BP}</p>
                                <p>SpO2 : {MedReport.SPO2}</p>
                                <h2 id="subhead">CONSULTATION</h2>                                                    
                                <p>Symptoms : {MedReport.symptoms}</p>
                                <p>Diagnosis : {MedReport.diagnosis}</p>
                                <p>Prescription : {MedReport.prescription}</p>
                                <p>Surgeries : {MedReport.surgeries}</p>                                                     
                            </div>
                    </div>  
            </>
        )

    }

    async componentDidMount() {
        let patid = sessionStorage.getItem('Patientid')
        let hisid = this.props.match.params.historyid;
        sessionStorage.setItem('HistoryID',hisid)
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({PatientDetail:res.data[0].history[hisid-1]})})
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({MedReport:res.data[0].history[hisid-1].details})})

    }


    
}
export default viewHis;