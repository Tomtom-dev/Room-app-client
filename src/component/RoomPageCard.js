import React from 'react'
import "./RoomPageCard.css"

export default function RoomPageCard(props) {

    const{title,image,description,location}= props

    return (
        <div >
            <section className="RoomCard" >
                <img src={image} alt={"the pic"} style={{maxWidth:"350px"} }/>
                <div>
                    <h5>Title :{title}</h5>
                    <p>Description : {description}</p>
                    <p>City : {location}</p>
                    <button>See more</button>
                </div>
            </section>
        </div>
        
        
    )
}
