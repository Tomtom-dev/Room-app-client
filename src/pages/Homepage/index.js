import React from 'react'
import {Link} from "react-router-dom"
import './index.css'
import Presentation from './Presentation.mp4'

export default function Homepage() {
    
    // const videosource="https://www.youtube.com/embed/BCYKK_2HeEY?controls=0&showinfo=01&rel=0&autoplay=1&loop=1&playlist=BCYKK_2HeEY&mute=1"

    return(
        <header>
            <div >
                <video id="background-video" autoPlay loop muted >
                        <source src={Presentation} type="video/mp4"/>
                </video>
            </div>
            
            <div className="header-overlay">
                <div >
                    <h1 className="title-page">Room for help</h1>
                    <p className="first-line">In big cities, lot of senior live alone in a big space and have difficulty to maintain it.
                    
                    <p className="second-line">For student and young workers the price of renting is very high.</p>
                    </p>
                    <p className="third-line">This website connect senior who propose a room to a student or worker in exchange of help or very low-cost rent.</p>    
                    <Link to="/rooms">
                        <button className="myButton button-animation">see the Rooms</button>
                    </Link>
                    
                </div>

            </div>
            
            
        </header>
    )
}
