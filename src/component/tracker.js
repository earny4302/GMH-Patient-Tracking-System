import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./tracker.css";
import Recep from "./recep";
import axios from 'axios';
import TrackerDisplay from './trackerDisplay';
import TrackerSearch from './trackSearch';

const lUrl = "http://localhost:7800/getlist";
class Tracker extends Component {
    
    constructor(props){
        super(props)
        this.state={
            PatientData:'',
            filteredData:''
            
        }
        
    }

    filterkey = (keyword) => {
        let output = this.state.PatientData.filter((data) => {
            return (data.pid.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })

        this.setState({PatientData:output})
    }

    // handleChange=(event) => {
    //     this.setState({pid:event.target.value})
    //     let output = this.state.PatientData.filter((data) => {
    //         return (data.pid.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
    //     })

    //     this.setState({FilteredData:output})
    // }

    // filterProduct = (enterid) => {
    //     let output = this.state.PatientData.filter((data) => {
    //         return (data.id.toLowerCase().indexOf(enterid.toLowerCase()) > -1)
    //     })

    //     this.setState({filteredData:output})
    // }
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

                    <TrackerSearch userInput={(data) => {this.filterkey(data)}}/>
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