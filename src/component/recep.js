import React,{Component} from 'react';
import "./recep.css";
class Recep extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    render(){
        return(
            <>
                <div>             
                    <div class="sidenav">
                            <div>

                                <img src="https://i.ibb.co/V9rKQ22/receptionist.png" alt="receptionist" border="0" id="receplogo"/>
                            </div>
                            <span >Name Here</span>
                            <span>Design Here</span>
                            <a href="#">Add New Patient</a>
                            <a href="#">Schedule Appointment</a>
                            <a href="#">Clients</a>
                            <a href="#">Contact</a>
                        
                    </div>                           
              
           
                </div>
            </>
        )

    }
}
export default Recep;