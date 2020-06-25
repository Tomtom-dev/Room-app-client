import React,{useState} from 'react'
import { useSelector } from "react-redux";
import Geocode from "react-geocode"
import {GoogleMap, useLoadScript, Marker, InfoWindow, Autocomplete} from "@react-google-maps/api"
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import mapStyles from "./mapStyles"
import {formatRelative} from 'date-fns'
import './RoomPageCardDetail.css'


export default function RoomPageCardDetail(props) {

    const{title,image,description,location,id}= props

    const [lng, setLng] = useState([])
    const [lat, setLat] = useState([])

    const REACT_APP_GOOGLE_MAPS_API_KEY="AIzaSyDaBw7bLrb_TtZx2Ei2os4dSvQJ85nRW9c"

    // get the adress
    const adressForRoom = useSelector(selectRoomDetails).location

    //transform the adress to latitude and longitude with geocoding

    Geocode.setApiKey(REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en")
    Geocode.fromAddress(adressForRoom).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setLng(lng)
          setLat(lat)

        },
        error => {
          console.error(error);
        }
      );

    const libraries= ["places"];
    const mapContainerStyle={
        width:"750px",
        height:"350px",
        margin:"auto"
    }
    const center = {
        lat:lat,
        lng:lng
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
            <h2>Offer Details</h2>
            <section className="formRoomDetail">  
                
                <img src={image} alt={"the pic"} id="img-presentation"/>
                
                <div>
                    <h3>{title}</h3>
                    <p>{location}</p>
                    <p>{description}</p>
                </div> 
                <div>
                    <GoogleMap 
                    mapContainerStyle={mapContainerStyle} 
                    zoom={12} 
                    center={center}
                    options={options}
                    >

                        <Marker 
                        position={
                            {lat:lat,
                            lng:lng}
                        }/>

                    </GoogleMap>
                </div>
            </section>
        </div>
    )
}
