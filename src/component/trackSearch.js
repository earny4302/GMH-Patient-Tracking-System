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
                <div class="search-box" >
                        <input class="search-txt" onChange={this.handleChange} type="text" name="" placeholder="Enter the Patient ID" />
                        <a class="search-btn" href="#">
                            <i class="fas fa-search"></i>
                        </a>
                </div>
            </>
        )
    }
}

export default TrackerSearch;
