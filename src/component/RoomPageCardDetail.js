import React,{useState} from 'react'
import { useSelector } from "react-redux";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import {selectRoomDetails} from '../store/roomPageDetail/selector'


export default function RoomPageCardDetail(props) {

    const{title,image,description,location,id}= props

    const adressForRoom = useSelector(selectRoomDetails).location

    console.log('please give me the room adress great sir', adressForRoom);
    

    function Map(){

        // const [selectedAdress, setSelectedAdress] = useState(null);

        return <GoogleMap
        defaultZoom={10} 
        defaultCenter={{lat:52.370216, lng:4.895168}}
        >
             {<Marker name={adressForRoom}/>}

             {/* {adressForRoom && (
                <InfoWindow>
                      <div>Adress Details</div> 
                </InfoWindow>
             )} */}
        </GoogleMap>
    }

    const REACT_APP_GOOGLE_KEY="AIzaSyCOIipQiXJJ3OQQwpHd2ftdpk76djROv9I"

    const WrappedMap = withScriptjs(withGoogleMap(Map))

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
                <div style={{width:"100vw", height:"100vh"}}>
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                    libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement={<div style={{height: "100%"}}/>}
                    mapElement={<div style={{height: "100%"}}/>}
                    />
                </div>
            </section>
        </div>
    )
}
