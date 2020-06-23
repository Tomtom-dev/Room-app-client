import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchRooms} from '../../store/roomPage/action'
import {getRoomPage} from '../../store/roomPage/selector'
import RoomPageCard from '../../component/RoomPageCard'


export default function Rooms() {

    const roomPages= useSelector(getRoomPage)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchRooms())
    },[])

    const roomsToRender = () =>
        roomPages.map(room => <RoomPageCard key={room.id}{...room}/>)
    
    return (
        <div>
            <h1>Rooms</h1>
            {roomsToRender()}
        </div>
    )
}
