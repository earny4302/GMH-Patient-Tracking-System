import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Recep from "./recep";
import axios from 'axios';
import "./newConsult.css"

const dUrl = "http://localhost:7800/getdetails";

class newConsult extends Component {
    
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
                   
                   
                <div class="container" style={{marginTop:"100px", marginLeft:"550px"}}>
                <center>
                    <h1><u>NEW CONSULT</u></h1>
                    </center>

                   

                    <form>
            <div class="form first">
                <div class="details personal">
                <div class="input-field">
                            <label>Consulting Doctor:&nbps;&nbps;&nbps;</label>
                            <input type="text" placeholder="Enter Consulting Doctor" name="address" value={this.state.address} onChange={this.handleChange} required/>
                        </div>
                <span class="title">GENERAL OBSERVATIONS</span>
                    <div class="fields">
                        <input type="hidden" name="pid" value={this.state.pid}/>
                        <div class="input-field">
                            <label>Temperature</label>
                            <input type="text" placeholder="Enter Temperature" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Pulse</label>
                            <input type="text" placeholder="Enter Pulse" name="age" value={this.state.age} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Blood Pressure</label>
                            <input type="text" placeholder="Enter BP" name="aadhaar" value={this.state.aadhaar} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>SPO2</label>
                            <input type="text" placeholder="Enter SPO2" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>

                        {/* <div class="input-field">
                            <label>Gender</label>
                            <select name="gender" value={this.state.gender}  required>
                                <option  onChange={this.handleChange} disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your Address" name="address" value={this.state.address} onChange={this.handleChange} required/>
                        </div> */}
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">CONSULTATION</span>

                    <div class="fields">
                        <div class="input-field2">
                            <label>Symptoms</label>
                            <input type="text" placeholder="Enter Contact Name" name="emergency_name" value={this.state.emergency_name} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field2">
                            <label>Diagnosis</label>
                            <input type="text" placeholder="Enter Contact Mobile No." name="emergency_number" value={this.state.emergency_number} onChange={this.handleChange} required/>
                        </div>
                        <div class="input-field2">
                            <label>Prescription</label>
                            <input type="text" placeholder="Enter Contact Mobile No." name="emergency_number" value={this.state.emergency_number} onChange={this.handleChange} required/>
                        </div>
                        <div class="input-field2">
                            <label>Surgeries</label>
                            <input type="text" placeholder="Enter Contact Mobile No." name="emergency_number" value={this.state.emergency_number} onChange={this.handleChange} required/>
                        </div>

                    </div>
                    <center>

                    <button id="but" class="nextBtn" onClick={this.checkout}>
                            <span class="btnText">SUBMIT</span>
                    </button>
                    </center>
                </div> 
            </div>
        </form>

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
export default newConsult;