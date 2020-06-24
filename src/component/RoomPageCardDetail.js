import React from 'react'

export default function RoomPageCardDetail(props) {

    const{title,image,description,location,id}= props


    return (
        <div>
            <section>  
                <h2>Offer Details</h2>
                <img src={image} alt={"the pic"}/>
                <h2>{title}</h2>
                <div>
                    <p>{location}</p>
                    <p>{description}</p>
                </div> 
            </section>
        </div>
    )
}
