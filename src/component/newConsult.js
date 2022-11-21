import React,{Component} from 'react';
import Recep from "./recep";
import "./newConsult.css"

// const Url = "http://localhost:7800/newConsult";
const Url = "https://patient2-api.onrender.com/newConsult";

let current = new Date();
let newid = Number(sessionStorage.getItem('Length')) + 1
class newConsult extends Component {
    
    constructor(props){
        super(props)
        this.state={
            hid:`${newid}`,
            date:`${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`,
            time:`${current.getHours()}:${current.getMinutes()}`,
            doctorName:'',
            symptoms:'',
            prescription:'',
            diagnosis:'',
            surgeries:'',
            temp:'',
            pulse:'',
            bp:'',
            spoo:''
            
        }
        
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let p = sessionStorage.getItem('Patientid')
        let obj = this.state;
        fetch(`${Url}/${p}`,{
            method: 'PATCH',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push(`/wel`))
    }


    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole">
                   
                   
                <div className="container" style={{marginTop:"60px", marginLeft:"350px",height:"770px"}}>
                <center>
                    <h1 style={{weight: 'bold', color: '#323D47'}}><u>NEW CONSULT</u></h1>
                    </center>

                   

                    <form>
                    <div className="form first">
                        <div className="details personal">
                        <div className="input-group" id="block" style={{marginTop: "15px"}} >
                            <span className="input-group-text"><i className="fas fa-user-alt"></i></span>
                            <input type="email" className="form-control" placeholder="Enter Consulting Doctor" id="email" name="doctorName" value={this.state.doctorName} onChange={this.handleChange} required/>
                        </div>
                        <span className="title" style={{marginTop: "30px"}} >GENERAL OBSERVATIONS</span>
                            <div className="fields">
                                <input type="hidden" name="hid" value={this.state.hid}/>
                                <input type="hidden" name="date" value={this.state.date}/>
                                <input type="hidden" name="time" value={this.state.time}/>
                                <div className="input-field">
                                    <label>Temperature :</label>
                                    <input type="text" placeholder="Enter Temperature" name="temp" value={this.state.temp} onChange={this.handleChange} required/>
                                </div>

                                <div className="input-field">
                                    <label>Pulse :</label>
                                    <input type="text" placeholder="Enter Pulse" name="pulse" value={this.state.pulse} onChange={this.handleChange} required/>
                                </div>

                                <div className="input-field">
                                    <label>Blood Pressure :</label>
                                    <input type="text" placeholder="Enter BP" name="bp" value={this.state.bp} onChange={this.handleChange} required/>
                                </div>

                                <div className="input-field">
                                    <label>SPO <sub>2</sub> :</label>
                                    <input type="text" placeholder="Enter SPO2" name="spoo" value={this.state.spoo} onChange={this.handleChange} required/>
                                </div>
                            </div>
                        </div>

                        <div className="details ID">
                            <span className="title">CONSULTATION</span>

                            <div className="fields" id = "view">
                                <div className="input-field2">
                                    <label>Symptoms : </label>
                                    <input type="text" id="rent" placeholder="Enter the Symptoms" name="symptoms" value={this.state.symptoms} style={{marginLeft: "18px"}} onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field2">
                                    <label>Prescription :</label>
                                    <input type="text" id="rent" placeholder="Enter the Prescription" name="prescription" style={{marginLeft: "10px"}} value={this.state.prescription} onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field2">
                                    <label>Diagnosis :</label>
                                    <input type="text" id="rent" placeholder="Enter the Diagnosis" name="diagnosis" value={this.state.diagnosis} style={{marginLeft: "26px"}} onChange={this.handleChange} required/>
                                </div>
                        
                                <div className="input-field2">
                                    <label>Surgeries :</label>
                                    <input type="text" id="rent" placeholder="Enter Surgeries" name="surgeries" value={this.state.surgeries} onChange={this.handleChange} style={{marginLeft: "28px"}} required/>
                                </div>

                            </div>
                            <center>

                            <button id="but" style={{marginTop: "30px"}} className="nextBtn" onClick={this.checkout}>
                                    <span className="btnText">SUBMIT</span>
                            </button>
                            </center>
                        </div> 
                    </div>
                </form>

                </div>
                </div>
                <center><hr style={{width:"30%",color:"#d5ede9"}}/></center>
            </>
        )
    }
}
export default newConsult;