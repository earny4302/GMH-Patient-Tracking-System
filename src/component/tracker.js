import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./tracker.css";
import Recep from "./recep";

const pUrl = "http://localhost:7800/newEntry";
class Tracker extends Component {
    
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

    

    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <center>
                <h1>Tracker Patient Here</h1>
                </center>
                
            </>
        )

    }

    
}
export default Tracker;