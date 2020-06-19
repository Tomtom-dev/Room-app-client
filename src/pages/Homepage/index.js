import React from 'react'
import {Link} from "react-router-dom"
import './index.css'
import PresentationPortfolio2 from './PresentationPortfolio2.mp4'


export default function Homepage() {
    
    console.log(PresentationPortfolio2);
    
    return (
        <header >
            <div >
                <video id="background-video" autoPlay loop muted >
                        <source src={PresentationPortfolio2} type="video/mp4"/>
                </video>
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
