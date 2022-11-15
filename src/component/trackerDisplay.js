import React from 'react';
import {Link} from 'react-router-dom';
import './tracker.css';

const TrackerDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                      <>
                        <div id="showpat" key={item._id}>
                            
                            <img id="paticonbox" alt="tag" src="https://i.ibb.co/311hHKs/m.jpg" ></img>

                            <div id="patientinfobox">
                                <p>ID : {item.pid}</p>
                                <p>NAME : {item.name}</p>
                                <p>AGE : {item.age}</p>
                                <p>GENDER : {item.gender}</p>
                                <p>ADDRESS : {item.address}</p>
                                <p>PHONE : {item.phone}</p>                        
                            </div>
                        </div>
                      </>
                    )
                })
            }else{
                return(
                    <div>
                        <center>
                            <h2 style={{marginTop:"3%"}}>NO DATA</h2>
                            <img src="https://i.ibb.co/HGPsnhF/empty-box.png" width="350px" height="350px"alt="empty"/>
                        </center>
                    </div>
                )
            }
        }else{
            return(
                <div className="load">
                    <center>
                        <img src="https://i.ibb.co/V3dvk8n/clock.gif" alt="loading"/>
                    </center>
                </div>
            )
        }

    }

    return(
        <>
            {renderData(props)}
        </>
    )
}

export default TrackerDisplay
