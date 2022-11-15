import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./add_patient.css";
import Recep from "./recep";

const pUrl = "http://localhost:7800/newEntry";
class AddPatient extends Component {
    
    constructor(props){
        super(props)

        this.state={
            pid:`gmh${Math.floor(Math.random()*10000)}`, 
            name:'', 
            age: '',
            aadhaar: '',
            phone: '',
            gender: '', 
            address: '',
            emergency_name: '',
            emergency_number:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        fetch(pUrl,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/recep'))
    }

    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="input_details">
                <div class="container">
                    <center>
                    <h1>ADD PATIENT DETAILS</h1>
                    </center>

                    <form>
            <div class="form first">
                <div class="details personal">
                    
                <span class="title">PERSONAL DETAILS</span>
                    <div class="fields">
                        <input type="hidden" name="pid" value={this.state.pid}/>
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Age</label>
                            <input type="number" placeholder="Enter your age" name="age" value={this.state.age} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Aadhaar</label>
                            <input type="text" placeholder="Enter your Aadhaar No." name="aadhaar" value={this.state.aadhaar} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="text" placeholder="Enter mobile number" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
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
                        </div>
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">EMERGENCY CONTACT DETAILS</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Contact Name</label>
                            <input type="text" placeholder="Enter Contact Name" name="emergency_name" value={this.state.emergency_name} onChange={this.handleChange} required/>
                        </div>

                        <div class="input-field">
                            <label>Contact Mobile No.</label>
                            <input type="text" placeholder="Enter Contact Mobile No." name="emergency_number" value={this.state.emergency_number} onChange={this.handleChange} required/>
                        </div>

                    </div>
                    <center>

                    <button class="nextBtn" onClick={this.checkout}>
                        
                            <span class="btnText"><i class="fas fa-user-alt"></i>SUBMIT</span>
                        
                        
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

    
}
export default AddPatient;