import React from 'react'
import { useSelector } from "react-redux";
import {getRoomRespond} from "../store/room_respond/selector"
import "./ReactToRoom.css"

export default function RoomMessage() {

    const roomRespondMessages= useSelector(getRoomRespond)

    console.log('give me the messages',roomRespondMessages);
    
    

    return (
        <div className="formMessageDetail">
            <p>Message here</p>
        </div>
    )
}
