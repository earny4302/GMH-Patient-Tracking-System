import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./recep.css";

const url = "http://localhost:5000/api/auth/userInfo";
class Recep extends Component {
    
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    details = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <> 
                    <span  font-weight="bold">{data.name}</span>
                    <span>{data.role}</span>
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
                    <div class="sidenav">
                            <div>
                                <img src="https://i.ibb.co/V9rKQ22/receptionist.png" style={{marginTop:"35px"}} alt="receptionist" border="0" id="receplogo"/>
                            </div>
                            {this.details()}
                            <Link to="/AddPatient">
                            <a href="#"><i class="fa fa-plus-circle"></i>&nbsp;ADD PATIENT</a>
                            </Link>
                            <Link to="/tracker">
                            <a href="#"><i class="material-icons">person_search</i>&nbsp;Tracker</a>
                            </Link>
                            <button id="but" onClick={this.handleLogout} style={{marginLeft:"21%", marginTop:"65%", width:"50%",height:"60px"}}>LOG OUT</button>
                            
                    </div>   
                    {/* <div className="head">
                        <img src="https://i.ibb.co/2649Fq7/medical-symbol.png" alt="logo"  />
                        <span className="btn btn-danger" onClick={this.handleLogout}>Log Out</span>
                    </div>                 */}
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