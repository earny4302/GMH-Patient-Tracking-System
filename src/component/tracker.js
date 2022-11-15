import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./tracker.css";
import Recep from "./recep";
import axios from 'axios';
import TrackerDisplay from './trackerDisplay';

const lUrl = "http://localhost:7800/getlist";
class Tracker extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientData:'',
            filteredData:'',
            pid:'' 
            
        }
        
    }
    handleChange=(event) => {
        this.setState({pid:event.target.value})
        let enterid = this.state.pid
    }

    filterProduct = (enterid) => {
        let output = this.state.PatientData.filter((data) => {
            return (data.id.toLowerCase().indexOf(enterid.toLowerCase()) > -1)
        })

        this.setState({filteredData:output})
    }
    render(){
        return(
            <>
                <div>
                    <Recep/>
                </div>
                <div id="whole">
                    <div id="headtrack">                    
                        <h1>TRACK PATIENT</h1>
                        
                    </div>

                    <div class="search-box" >
                            <input class="search-txt" onChange={this.handleChange} type="text" name="" placeholder="Enter the Patient ID" />
                            <a class="search-btn" href="#">
                                <i class="fas fa-search"></i>
                            </a>
                    </div>
                    <TrackerDisplay listData={this.state.PatientData}/>
                </div>
                
                
                
            </>
        )

    }

    componentDidMount(){
        axios.get(lUrl)
        .then((res) => {this.setState({PatientData:res.data})})
    }

    
}
export default Tracker;