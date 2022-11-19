import React,{Component,Fragment} from 'react';
import './tracker.css';

class TrackerSearch extends Component{

    constructor(props){
        super(props)
        this.state={
            keyword:''
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        // we are calling prop to pass data
        this.props.userInput(event.target.value)
    }

    render(){
        return(
            <>
                <div className="search-box" >
                        <input className="search-txt" onChange={this.handleChange} type="text" name="" placeholder="Enter the Patient ID" />
                        <span className="search-btn" href="#">
                            <i className="fas fa-search"></i>
                        </span>
                </div>
            </>
        )
    }
}

export default TrackerSearch;
