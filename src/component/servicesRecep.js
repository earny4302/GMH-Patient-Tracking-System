import React,{Component} from 'react';
import "./servicesRecep.css"
import {Link} from 'react-router-dom';
import Recep from "./recep.js"

class servicesRecep extends Component {
    
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

   

    
    

    render(){
        return(
            <>
                <Recep/>
                
            </>
        )

    }
}
export default servicesRecep