import React,{useState} from 'react'
import { useSelector } from "react-redux";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import mapStyles from "./mapStyles"
import {formatRelative} from 'date-fns'


export default function RoomPageCardDetail(props) {

    const{title,image,description,location,id}= props

    const adressForRoom = useSelector(selectRoomDetails).location

    console.log('please give me the room adress great sir', adressForRoom);

    const [markers, setMarkers] = useState([])

    const REACT_APP_GOOGLE_MAPS_API_KEY="AIzaSyDaBw7bLrb_TtZx2Ei2os4dSvQJ85nRW9c"
    const libraries= ["places"];
    const mapContainerStyle={
        width:"100vw",
        height:"100vh"
    }
    const center = {
        lat:52.370216,
        lng:4.895168
    }

    const options={
        styles:mapStyles,
        diiisableDefaultUI: true,
        zoomControl: true
    }
    
    const {isLoaded, loadError}= useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    

    

    return (
        <div>
            <section>  
                <h2>Offer Details</h2>
                <img src={image} alt={"the pic"}/>
                <h2>{title}</h2>
                <div>
                    <p>{location}</p>
                    <p>{description}</p>
                </div> 
                <div>
                    <h3>Room </h3>
                    <GoogleMap 
                    mapContainerStyle={mapContainerStyle} 
                    zoom={8} 
                    center={center}
                    options={options}
                    onClick={(event)=>{setMarkers()}
                    }
                    ></GoogleMap>
                </div>
            </section>
        </div>
    )
}
