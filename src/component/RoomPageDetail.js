import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchRoomById} from '../store/roomPageDetail/action'
import {useParams} from 'react-router-dom'
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import RoomPageCardDetail from '../component/RoomPageCardDetail'


export default function RoomPageDetail() {

    const id = useParams().id
    const roomSelected = useSelector(selectRoomDetails)

    // const {description,image,location,title}=props

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRoomById(id))
    },[])
    

    // const roomDetailToRender = () => 
    // roomSelected.map(roomDetail => <RoomPageCardDetail key={roomDetail.id}{...roomDetail}/>)

    return (
        <div>
            <RoomPageCardDetail key={roomSelected.id}{...roomSelected}/>
        </div>
    )
}

