import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./tracker.css";
import Recep from "./recep";

const pUrl = "http://localhost:7800/newEntry";
class Tracker extends Component {
    
    constructor(props){
        super(props)
        this.state={
            pid:`` 
            
        }
        
    }
    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="headtrack">                    
                    <h1>TRACK PATIENT</h1>
                    
                </div>

                <div class="search-box">
                        <input class="search-txt" onChange={this.handleChange} type="text" name="" placeholder="Type to search"/>
                        <a class="search-btn" href="#">
                            <i class="fas fa-search"></i>
                        </a>
                </div>

                <div id="showpat"> 
                    <img id="paticonbox" src="https://i.ibb.co/JCShHKQ/patient-1.png" ></img>

                    <div id="patientinfobox">
                        <p>ID : </p>
                        <p>NAME : </p>
                        <p>AGE : </p>
                        <p>GENDER : </p>
                        <p>ADDRESS : </p>
                        <p>PHONE : </p>                        
                    </div>
                </div>
                
            </>
        )

    }

    
}
export default Tracker;