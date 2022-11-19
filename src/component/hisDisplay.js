import React from 'react';
import {Link} from 'react-router-dom';
import './medHistory';

const HisDisplay = (props) => {

    const renderData = ({hisData}) => {
        if(hisData){
            if(hisData.length>0){
                return hisData.map((item) => {
                    return(
                      <>
                        <div id="showpat" key={item.hid}>                       
                            
                            <img id="paticonbox" alt="tag" src="https://i.ibb.co/Th7ftBx/Whats-App-Image-2022-11-16-at-11-20-13-PM.jpg" style={{width:"30%"}}  ></img>
                                <div id="patientinfobox" style={{marginTop:"3%"}}>
                                    <p>HID : {item.hid}</p>
                                    <p>DATE : {item.date}</p>
                                    <p>TIME : {item.time}</p>
                                    <p>CONSULTED BY : {item.doctorName}</p>
                                    <Link to={`/viewHis/${item.hid}`}>
                                        <button id="but" style={{marginLeft:"35%", marginTop:"5%"}}>VIEW DETAILS</button>                       
                                    </Link>
                                </div>
                        </div>
                      </>
                    )
                })
            }
        }

    }

    return(
        <>
            {renderData(props)}
        </>
    )
}

export default HisDisplay
