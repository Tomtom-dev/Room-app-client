import React from 'react'
import "./RoomPageCard.css"
import { Link } from "react-router-dom";

export default function RoomPageCard(props) {

    const{title,image,description,location,id}= props

    return (
        <div >
            <section className="RoomCard" >
                <img src={image} alt={"the pic"} style={{maxWidth:"350px", maxHeight:"220px"} }/>
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <p>City : {location}</p>
                    <Link to={`rooms/${id}`}>
                        <button>See more</button>
                    </Link>
                    
                </div>
            </section>
        </div>
        
        
    )
}
