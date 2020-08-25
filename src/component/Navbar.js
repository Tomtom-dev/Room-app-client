import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import './Navbar.css'
import {selectUserAge} from '../store/user/selector'
import {logOut} from '../store/user/action'

export default function Navbar (){

    const dispatch = useDispatch();
    const age = useSelector(selectUserAge)


    return(
        <nav className="container grey darken-3 topBotomBordersIn">
                <ul >
                    <NavLink to="/homepage" className="button" >Home</NavLink>
                    <NavLink to="/rooms" className="button">Rooms</NavLink>
                    {age?(<NavLink to="/announce" className="button">Post a room</NavLink>):
                    (null)}
                    {age?(<NavLink to="/homepage" className="button" onClick={() => dispatch(logOut())}>Log Out</NavLink>):
                    (<NavLink to="/login" className="button">Login</NavLink>)}
                </ul>
        </nav>
    )
}