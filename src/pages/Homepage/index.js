import React from 'react'
import {Link} from "react-router-dom"
import './index.css'
// import PresentationPortfolio2 from './PresentationPortfolio2.mp4'


export default function Homepage() {
    
    const videosource="https://www.youtube.com/embed/BCYKK_2HeEY?controls=0&showinfo=01&rel=0&autoplay=1&loop=1&playlist=BCYKK_2HeEY&mute=1"

    return(
        <header>
            <div >

            <iframe id="background-video" src={videosource} title="video"></iframe>

            
                {/* <video id="background-video" autoPlay loop muted >
                        <source src={videosource} type="video/mp4"/>
                </video> */}
            </div>
            <div className="header-overlay"></div>
            <div className="header-content">
                <h1>Homeshare</h1>
                <p>Where we match students in need for a low-cost accommodation with an older person with a spare room.

There are a lot of benefits to both the Householder and Homesharer .</p>

                <Link to="/rooms">
                    <button className="myButton">see the Rooms</button>
                </Link>
                
            </div>
            
        </header>
    )
}
