import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/roomPage/action";
import { getRoomPage } from "../../store/roomPage/selector";
import RoomPageCard from "../../component/RoomPageCard";
import Select from "react-select";

export default function Rooms() {
  const roomPages = useSelector(getRoomPage);
  const dispatch = useDispatch();

  const [address, setAddress] = useState([]);

  console.log("theroompage", roomPages);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  //get array of location 

  const arrayOfLocation=roomPages.map(room=>{
    return{
        key:room.id,
        value:room.location,
        label:room.location
    }
  })

  console.log(arrayOfLocation);
  

  const roomsToRender = () =>
    roomPages.map((room) => <RoomPageCard key={room.id} {...room} />);

  return (
    <div>
      <h1>Rooms</h1>
        <form style={{width:"15em", marginLeft:"24em", marginBottom:"2em", margin:'auto'}}>
             <Select options={arrayOfLocation}/>
        </form>
      

      {roomsToRender()}
    </div>
  );
}
