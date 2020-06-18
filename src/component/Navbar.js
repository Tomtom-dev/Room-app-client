import React from 'react'
import {NavLink} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";


export default function Navbar (){
    return(
        <Router>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/rooms">Rooms</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </ul>
                </div>
            </nav>
        </Router>
            
        
        
    )
}