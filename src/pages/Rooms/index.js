import React, {  useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/roomPage/action";
import { getRoomPage,getRoomPageLoading } from "../../store/roomPage/selector";
import RoomPageCard from "../../component/RoomPageCard";
import "./index.css"


export default function Rooms() {
  const roomPages = useSelector(getRoomPage);
  const dispatch = useDispatch();
  const [place, setPlace] = useState("value")
  const Loading = useSelector(getRoomPageLoading)
  
  useEffect(() => {
    dispatch(fetchRooms());
    
  }, [dispatch]);

  // Filter with the slider

  let filteredRooms = roomPages.filter(room=>{
      const matchRoom = room.location === place
      if(place ==="value" || place === "defaultValue"){
          return roomPages
      }else if ( matchRoom) {
          return true
      }else{
          return false
      }
  })
  
  const roomsToRender = () =>
    filteredRooms.map((room) => <RoomPageCard key={room.id} {...room} />);

  return (
    <div>
        <h1 className="title-page">Rooms</h1>
        <form style={{width:"15em", marginLeft:"24em", marginBottom:"2em", margin:'auto',marginTop:"1em", paddingBottom:"2em"}}>
          <select className="custom-select"
            onChange={(event)=>setPlace(event.target.value)}
            >

            <option value="defaultValue">choose a location</option>
            {roomPages.map((room) => {
                return <option 
                key={room.id}
                value={room.location} >      
                {room.location}
            </option>
          })}
          </select>
        </form>
        <div className="rooom">
          {Loading ? <h2 className="lds-dual-ring">Loading ...</h2> : roomsToRender()}
        </div>
        
      
    </div>
  );
}
