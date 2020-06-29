import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import Geocode from "react-geocode"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import {getRoomRespond} from "../store/room_respond/selector"
import {getAllMessages} from '../store/room_respond/action'
import mapStyles from "./mapStyles"
// import {formatRelative} from 'date-fns'
import ReactToRoom from './ReactToRoom'
import RoomMessage from './RoomMessage'
import './RoomPageCardDetail.css'


export default function RoomPageCardDetail(props) {

    const{title,image,description,location}= props
    const [lng, setLng] = useState([])
    const [lat, setLat] = useState([])

    const dispatch = useDispatch();

    const [editPost, seteditPost] = useState(false)

    useEffect(() => {
       dispatch(getAllMessages())
    }, [dispatch])

    // get the adress
    const roomRespondMessages= useSelector(getRoomRespond)
    const adressForRoom = useSelector(selectRoomDetails).location


    //transform the adress to latitude and longitude with 

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en")
    Geocode.fromAddress(adressForRoom).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          setLng(lng)
          setLat(lat)
        },
        error => {
          console.error(error);
        }
      );

    // set proprieties for google map
    const libraries= ["places"];
    const mapContainerStyle={
        width:"50em",
        height:"22em",
        margin:"auto",
        marginBottom: "1em",
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
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    

    const messageToRender= () => 
        roomRespondMessages.map((message)=><RoomMessage key={message.id} {...message}/> );
    
    return (
        <div>
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
                    
                    <button id="btn-react"onClick={()=>seteditPost(!editPost)}>React to the post</button>
                    {editPost ? (<ReactToRoom/>):(null)}
            </section>
            <h4 style={{ marginRight:"28em"}}>Message</h4>
            {messageToRender()}
        </div>
    )
}
