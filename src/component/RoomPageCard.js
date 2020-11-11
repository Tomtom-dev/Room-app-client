import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip"
import "./RoomPageCard.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {selectUserAge} from '../store/user/selector'

export default function RoomPageCard(props) {

    const [flip, setFlip] = useState(false);
    const{title,image,description,location,id}= props

    const age = useSelector(selectUserAge)

    return (
        <div>
            <section className="RoomCard" >
                <div className="RoomCard-inner">
                        <div key="front">
                            <img src={image} className="" alt={"room "}/>
                        </div>
                        <div key="back">
                                <div className="info-room">
                                    <h5>{title}</h5>
                                    <p>City : {location}</p>
                                    {age?(<Link to={`rooms/${id}`}>
                                        <button>See more</button>
                                    </Link>) : <Link to={`login/`}>
                                    <p>Log in to see more</p>
                                    </Link>}
                                </div>
                        </div>
                    
                </div>
            </section>
        </div>
        
        
    )
}
