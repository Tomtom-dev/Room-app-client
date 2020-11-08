import React from 'react'
import "./ReactToRoom.css"

export default function RoomMessage(props) {

    const{message}=props

    return (
        <div className="messages_container"> 
            <div className="formMessageDetail">
                <p style={{textAlign:"left"  }}>{message}</p>
                <button style={{textAlign:"right"  }}>Answer by email</button>
            </div>
        </div>
        
    )
}
