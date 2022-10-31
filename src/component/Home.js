import React,{Component} from 'react';
// import Header from '../Header';
// import Footer from '../Footer'
import './home.css'

const url = "http://localhost:5000/api/auth/login";

class Home extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push(`/recep`)
            }
        })
    }


    render(){
        return(
            <>
                <div id="main">
                    <center>
                        <div>
                            <img src="https://i.ibb.co/Kyw5xgL/logo-no-background.png" alt="logo" id="logo_home"></img>
                        </div>
    
                        <div id="HeadingGMH">GWALIOR MEDICAL HOSPITAL</div>
                        
                        <div id="login">
                            
                            
                            <h4 style={{color:'#690101'}}>{this.state.message}</h4>
                            <div class="input-group" id="block">
                                <span class="input-group-text"><i class="fas fa-user-alt"></i></span>
                                <input type="email" class="form-control" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                            </div>
                            

                            <div class="input-group" id="block">
                                <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                <input type="password" class="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                            </div>
    
                            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Sign In</button>
                            
                        </div>    
                    </center>                
                </div>
            </>
        )

    }
    
}

export default Home