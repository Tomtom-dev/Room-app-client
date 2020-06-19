import React from 'react'
import {Link} from "react-router-dom"
import './index.css'
import PresentationPortfolio2 from './PresentationPortfolio2.mp4'


export default function Homepage() {
    
    const videosource="https://www.youtube.com/embed/r2-XL3P_ZNE?controls=0&showinfo=01&rel=0&autoplay=1&loop=1&playlist=r2-XL3P_ZNE&mute=1"

    return(
        <header>
            <div >

            <iframe id="background-video" src={videosource}></iframe>

            
                {/* <video id="background-video" autoPlay loop muted >
                        <source src={videosource} type="video/mp4"/>
                </video> */}
            </div>
            <div className="header-overlay"></div>
            <div className="header-content">
                <h1>hello Everyone</h1>
                <p>Non etiam tempor id arcu magna ante eget. 
                    Nec per posuere cubilia cras porttitor condimentum
                    orci suscipit. Leo maecenas in tristique,
                     himenaeos elementum placerat.
                    Taciti rutrum nostra,
                    eget cursus velit ultricies. Quam molestie tellus himenaeos
                     cubilia congue vivamus ultricies.
                    Interdum praesent ut penatibus fames eros ad consectetur sed.</p>

                <Link to="/rooms">
                    <button className="myButton">see the Rooms</button>
                </Link>
                
            </div>
            
        </header>
    )
}
