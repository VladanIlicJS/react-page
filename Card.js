import React from "react"

export default function Card(props){
    return(
        <div id="card">
            <div className="image">
                <img src={props.imageUrl}/>
            </div>
            <div className="info">
                <div className="location">
                    <img src="./images/pin.png"/>
                    <span>{props.location}</span>
                    <a>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}
       