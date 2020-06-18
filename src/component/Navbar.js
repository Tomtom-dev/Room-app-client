import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar (){
    return(
        <nav className="nav-wrapper grey darken-3">
                <ul >
                    <NavLink to="/homepage" class="button" >Home</NavLink>
                    <NavLink to="/rooms" class="button">Rooms</NavLink>
                    <NavLink to="/announce" class="button">post announce</NavLink>
                    <NavLink to="/login" class="button">Login</NavLink>
                </ul>
        </nav>
    )
}