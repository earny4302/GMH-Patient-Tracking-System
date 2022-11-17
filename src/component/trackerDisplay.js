import React from 'react';
import {Link} from 'react-router-dom';
import './tracker.css';

const TrackerDisplay = (props) => {
    const refreshPage = ()=>{
        window.location.reload();
    }

    


    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                      <>
                        <Link to={`/medHistory/${item.pid}`}>
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
                        </Link>
                      </>
                    )
                })
            }else{
                return(
                    <div >
                        <center>
                            <h2 style={{marginTop:"3%"}}>NO PATIENT FOUND</h2>
                            <button id="try" onClick={refreshPage} className="btn btn-primary">Try Again</button>
                        </center>
                    </div>
                )
            }
        }

    }

    return(
        <>
            {renderData(props)}
        </>
    )
}

export default TrackerDisplay
