import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchRoomById} from '../store/roomPageDetail/action'
import {useParams} from 'react-router-dom'
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import RoomPageCardDetail from '../component/RoomPageCardDetail'
// import {} from ''

export default function RoomPageDetail(props) {

    const id = useParams().id
    const roomSelected = useSelector(selectRoomDetails)

    const {description,image,location,title}=props

    console.log('checking the data',roomSelected);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRoomById(id))
    },[])
    
    const roomDetailToRender = () => 
    roomSelected.map(roomDetail => <RoomPageCardDetail key={roomDetail.id}{...roomDetail}/>)

    return (
        <div>
            {roomDetailToRender}
        </div>
    )
}

