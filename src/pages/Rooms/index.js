import React, {  useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/roomPage/action";
import { getRoomPage } from "../../store/roomPage/selector";
import RoomPageCard from "../../component/RoomPageCard";


export default function Rooms() {
  const roomPages = useSelector(getRoomPage);
  const dispatch = useDispatch();
  const [place, setPlace] = useState("value")

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  // Filter with the slider

  let filteredRooms = roomPages.filter(room=>{


    if (room.location === "choose a location"){
      return true
    }else {
      const matchRoom = room.location === place
      if(matchRoom){
          return true
      }else{
          return false
      }
    }
  })

  console.log("filter",filteredRooms);

  const roomsToRender = () =>
    filteredRooms.map((room) => <RoomPageCard key={room.id} {...room} />);

  return (
    <div>
      <h1>Rooms</h1>
        <form style={{width:"15em", marginLeft:"24em", marginBottom:"2em", margin:'auto', paddingBottom:"2em"}}>
          <select className="custom-select"
           onChange={(event)=>setPlace(event.target.value)}>

            <option value="defaultValue">choose a location</option>
            {roomPages.map((room) => {
                    return <option key={room.id} value={room.location} >
                            {room.location}
            </option>
          })}
          </select>
        </form>
      {roomsToRender()}
    </div>
  );
}
