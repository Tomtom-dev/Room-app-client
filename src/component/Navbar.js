import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar (){
    return(
        <nav className="nav-wrapper grey darken-3">
                <ul >
                    <NavLink to="/homepage" className="button" >Home</NavLink>
                    <NavLink to="/rooms" className="button">Rooms</NavLink>
                    <NavLink to="/announce" className="button">post announce</NavLink>
                    <NavLink to="/login" className="button">Login</NavLink>
                </ul>
        </nav>
    )
}