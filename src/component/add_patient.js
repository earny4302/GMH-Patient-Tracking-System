import React,{Component} from 'react';
import "./add_patient.css";
import Recep from "./recep";

// const pUrl = "http://localhost:7800/newEntry";
const pUrl = "https://patient2-api.onrender.com/newEntry";
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
            emergency_number:'',
            history:[]
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
        .then(this.props.history.push('/wel'))
        alert(`Your Pid is ${this.state.pid}`)
    }

    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="input_details">
                <div className="container">
                    <center>
                    <h1 style={{weight: 'bold', color: '#323D47'}}><u>ADD PATIENT DETAILS</u></h1>
                    </center>

                    <form>
            <div className="form first">
                <div className="details personal">
                    
                <span className="title">PERSONAL DETAILS</span>
                    <div className="fields">
                        <input type="hidden" name="pid" value={this.state.pid}/>
                        <div className="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Age</label>
                            <input type="number" placeholder="Enter your age" name="age" value={this.state.age} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Aadhaar</label>
                            <input type="text" placeholder="Enter your Aadhaar No." name="aadhaar" value={this.state.aadhaar} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Mobile Number</label>
                            <input type="text" placeholder="Enter mobile number" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Gender</label>
                            <input type="text" placeholder="Enter Gender" name="gender" value={this.state.gender} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your Address" name="address" value={this.state.address} onChange={this.handleChange} required/>
                        </div>
                    </div>
                </div>

                <div className="details ID">
                    <span className="title">EMERGENCY CONTACT DETAILS</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Contact Name</label>
                            <input type="text" placeholder="Enter Contact Name" name="emergency_name" value={this.state.emergency_name} onChange={this.handleChange} required/>
                        </div>

                        <div className="input-field">
                            <label>Contact Mobile No.</label>
                            <input type="text" placeholder="Enter Contact Mobile No." name="emergency_number" value={this.state.emergency_number} onChange={this.handleChange} required/>
                        </div>

                    </div>
                    <center>

                    <button id="but" className="nextBtn" onClick={this.checkout}>
                            <span className="btnText">SUBMIT</span>
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