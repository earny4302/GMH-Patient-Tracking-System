import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import './home.css'
const Home = () => {
    return(
        <>
            <div id="main">
                <center>
                    <div id="border">


                    <div>
                        <img src="https://i.ibb.co/Kyw5xgL/logo-no-background.png" id="logo_home"></img>
                    </div>

                    <div id="HeadingGMH">GWALIOR MEDICAL HOSPITAL</div>
                    
                    <div>
                        <form action="http://localhost:5000/api/auth/login" id="login">

                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>

                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                            </div>

                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    
                        </div>

                
                </center>                
            </div>
        </>
    )
}

export default Home