import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./recep.css";

const url = "http://localhost:5000/api/auth/userInfo";
class Recep extends Component {
    
    constructor(props){
        super(props)

        this.state={
            userData:'',
            
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
    }

    details = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <> 
               
                    <span  style={{fontSize:'28px'}}>{data.name} </span>
                    <span style={{fontSize:'24px'}}>{data.role}</span>
                  
                </>
            )

        }else{
            return(
                <>  
                    <span >Name Here</span>
                    <span >Design Here</span>
                </>

            )
        }
    }

    render(){
        return(
            <>
                <div>             
                    <div className="sidenav">
                            <div>
                                <img src="https://i.ibb.co/V9rKQ22/receptionist.png" style={{marginTop:"35px"}} alt="receptionist" border="0" id="receplogo"/>
                            </div>
                            {this.details()}
                            
                            <Link to="/AddPatient">
                            <span style={{textAlign:"left"}}><i className="fa fa-plus-circle"></i>&nbsp;ADD PATIENT</span>
                            </Link>
                            <Link to="/tracker">
                            <span style={{textAlign:"left"}}><i className="material-icons">person_search</i>&nbsp;TRACKER</span>
                            </Link>
                            <Link to='/'>
                            <button id="but" onClick={this.handleLogout} style={{marginLeft:"21%",marginBottom:"0px", marginTop:"74%", width:"50%",height:"50px",fontSize:"17px"}}>
                                <img src="https://i.ibb.co/7K79QbG/logout.png" alt="logout" style={{width:"30px",height:"30px"}} />
                                &nbsp;LOG OUT
                            </button>
                            </Link>
                    </div> 
                </div>
            </>
        )

    }

    componentDidMount() {
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}
export default Recep;