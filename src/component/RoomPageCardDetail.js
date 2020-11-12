import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import Geocode from "react-geocode"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import {selectRoomDetails} from '../store/roomPageDetail/selector'
import {getRoomRespond} from "../store/room_respond/selector"
import {getAllMessages} from '../store/room_respond/action'
import mapStyles from "./mapStyles"
// import {formatRelative} from 'date-fns'
import {selectUserId} from '../store/user/selector'
import {selectRoomDetailsUserId} from "../store/roomPageDetail/selector"
import ReactToRoom from './ReactToRoom'
import RoomMessage from './RoomMessage'
import './RoomPageCardDetail.css'


export default function RoomPageCardDetail(props) {

    const{title,image,description,location}= props
    const [lng, setLng] = useState([])
    const [lat, setLat] = useState([])

    const REACT_APP_GOOGLE_MAPS_API_KEY ="AIzaSyDsD6lQJeHlSq_uWE01BY6eCNunqO8oAEE"

    const dispatch = useDispatch();

    const [editPost, seteditPost] = useState(false)

    useEffect(() => {
       dispatch(getAllMessages())
    }, [dispatch])

    // get the adress
    const roomRespondMessages= useSelector(getRoomRespond)
    const adressForRoom = useSelector(selectRoomDetails).location
    const getUserId =useSelector(selectUserId)
    const getRoomRespondUserId= useSelector(selectRoomDetailsUserId)


    //transform the adress to latitude and longitude with 

    Geocode.setApiKey(REACT_APP_GOOGLE_MAPS_API_KEY);
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
        width:"100%",
        height:"100%",
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
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    // function allow user to see if the user who post the room to see the message
    function messageForUser() {
        if(getUserId === getRoomRespondUserId){
            return true;
        }else return false;
    } 

    const messageToRender= () => 
        roomRespondMessages.map((message)=><RoomMessage key={message.id} {...message}/> );
    
    return (
        <div style={{marginTop:'3em'}}>
            <section className="formRoomDetail"> 

                    <div className="first-part">
                        <img src={image} alt={"the pic"} id="img-presentation"/>
                        
                        <div>
                            <h3>{title}</h3>
                            <p className="location-text">Location :{location}</p>
                            <p className="description-text">{description}</p>
                        </div> 
                    </div>
                   
                   <div className="googleMap-container">
                    <div className="google-map" style={{marginTop:"2em"}} >
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
                   </div>
                    
                    
                    <button id="btn-react"onClick={()=>seteditPost(!editPost)}>React to the post</button>
                    {editPost ? (<ReactToRoom/>):(null)}
            </section>
            <h4 className="message-title">Message</h4>
            <div className="answer-message" style={{width:"76em",margin:"auto"}}>
                {messageForUser() ? messageToRender() :  <p></p>}
            </div>
            
        </div>
    )
}
