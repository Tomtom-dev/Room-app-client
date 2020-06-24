import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";
import './Navbar.css'
import {selectUserAge} from '../store/user/selector'

export default function Navbar (){


    const age = useSelector(selectUserAge)


    return(
        <nav className="nav-wrapper grey darken-3">
                <ul >
                    <NavLink to="/homepage" className="button" >Home</NavLink>
                    <NavLink to="/rooms" className="button">Rooms</NavLink>
                    {age?(<NavLink to="/announce" className="button">Post a room</NavLink>):console.log('hello')}
                    <NavLink to="/login" className="button">Login</NavLink>
                </ul>
        </nav>
    )
}