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
                <p>Often there are elderly who need a helping hand around the house or feel lonely at times.

Studies have shown  that social isolation and loneliness of elderly people often leads to mental decline and mortality.

While on the other hand there is a huge housing problem for students that study in big cities.</p>

                <Link to="/rooms">
                    <button className="myButton">see the Rooms</button>
                </Link>
                
            </div>
            
        </header>
    )
}
