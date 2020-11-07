import React from 'react'
import "./RoomPageCard.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {selectUserAge} from '../store/user/selector'

export default function RoomPageCard(props) {

    const{title,image,description,location,id}= props

    const age = useSelector(selectUserAge)

    return (
        <div>
            <section className="RoomCard" >
                <img src={image} className="" alt={"room "}/>
                <div className="info-room">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <p>City : {location}</p>
                    {age?(<Link to={`rooms/${id}`}>
                        <button>See more</button>
                    </Link>) : <Link to={`login/`}>
                    <p>Log in to see more</p>
                    </Link>}
                </div>
            </section>
        </div>
        
        
    )
}
