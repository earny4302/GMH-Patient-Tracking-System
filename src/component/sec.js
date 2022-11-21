import React,{Component} from 'react';
import axios from 'axios';
import Recep from './recep';
import "./recep.css";

const url = 'http://localhost:7800/getlist'

class Wel extends Component {
    
    constructor(props){
        super(props)

        this.state={
            patientData:''
        }
    }

    
    render(){
        let n = this.state.patientData.length
        let s = sessionStorage.getItem('Staff')
        return(
            <>
                <div>             
                    <Recep/>
                    <div id="halt">
                        <div id="card">
                        <center><hr style={{width:"3%",color:"rgb(3, 140, 135)"}}/></center>
                            <span>{s}</span>
                            <img src="https://i.ibb.co/RYzCP5J/doctor.png" alt="logo" />
                            <p>Hospital Staff</p>
                        </div>
                        {/* <div id="card">
                        <center><hr style={{width:"3%",color:"rgb(3, 140, 135)"}}/></center>
                            <span>45</span>
                            <img src="https://i.ibb.co/Zht0Ryz/user.png" alt="logo" />
                            <p>Faculty Members</p>
                        </div> */}
                        <div id="card">
                        <center><hr style={{width:"3%",color:"rgb(3, 140, 135)"}}/></center>
                            <span>{n}</span>
                            <img src="https://i.ibb.co/m6sF4Mk/add-user.png" alt="logo" />
                            <p>Patients</p>
                        </div>
                        <center><hr style={{width:"30%",color:"#d5ede9"}}/></center>
                        <div className="num">
                        <p>Helpline Number : 1800-180-1104 </p>
                        <p>Email Us : <u style={{color:"rgb(3, 140, 135)"}}>gmh9823@gmail.com</u></p>
                        </div>
                    </div>
                </div>
            </>
        )

    }

    async componentDidMount() {
        axios.get(url)
        .then((res) => {this.setState({patientData:res.data})})
        axios.get(url)
        .then((res) => {this.setState({patientData:res.data})})
    }

    
}
export default Wel;