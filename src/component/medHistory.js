import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./tracker.css";
import Recep from "./recep";
import axios from 'axios';

const dUrl = "http://localhost:7800/getdetails";

class MedHistory extends Component {
    
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
                    <div id="headtrack">                    
                        <h1>Medical History</h1>
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
export default MedHistory;