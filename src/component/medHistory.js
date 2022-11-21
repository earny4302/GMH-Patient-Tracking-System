import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Recep from "./recep";
import axios from 'axios';
import "./medHistory.css"
import HisDisplay from "./hisDisplay"

// const dUrl = "http://localhost:7800/getdetails";
const dUrl = "https://patient2-api.onrender.com/getdetails";

class MedHistory extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientDetail:'',
            hist:''
            
        }
        
    }


    render(){
        let {PatientDetail} = this.state
        let len = this.state.hist.length
        sessionStorage.setItem('Length',len)
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole" key={PatientDetail._id}>
                    <div id="headHis">                        
                        <h1>MEDICAL HISTORY</h1>                       
                                            
                    </div>
                    <div id="showpatHis" >                         
                            

                            <div id="infobox">
                                <p>ID : {PatientDetail.pid}</p>
                                <p>NAME : {PatientDetail.name}</p>
                                <p>AGE : {PatientDetail.age}</p>
                                <p>GENDER : {PatientDetail.gender}</p>
                                <p>ADDRESS : {PatientDetail.address}</p>
                                <p >PHONE : {PatientDetail.phone}</p>                        
                            </div>
                        </div>
                    </div>
                    <HisDisplay hisData={PatientDetail.history}/>
                    <Link to="/newConsult">
                    <button id="but" style={{marginLeft:"50%", marginTop:"2%", width:"20%",height:"50px"}}><i className="fa fa-plus" ></i>&nbsp;&nbsp;NEW CONSULT</button>
                    </Link>
                    <center><hr style={{width:"30%",color:"#d5ede9"}}/></center>
                    
                
                
                
                
            </>
        )

    }

    async componentDidMount() {

        let patid = this.props.match.params.patientid;
        sessionStorage.setItem('Patientid',patid)
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({PatientDetail:res.data[0]})})
        axios.get(`${dUrl}/${patid}`)
        .then((res) => {this.setState({hist:res.data[0].history})})


    }


    
}
export default MedHistory;