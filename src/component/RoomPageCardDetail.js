import React from 'react'

export default function RoomPageCardDetail(props) {

    const{title,image,description,location,id}= props


    return (
        <div>
            <section>
                
                <h2>Offer Details</h2>
                <p>{title}</p>
                <p>{location}</p>
                <p>{description}</p>
                
            </section>
        </div>
    )
}
