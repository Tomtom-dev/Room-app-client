import React, {  useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/roomPage/action";
import { getRoomPage } from "../../store/roomPage/selector";
import RoomPageCard from "../../component/RoomPageCard";
import Select from "react-select";

export default function Rooms() {
  const roomPages = useSelector(getRoomPage);
  const dispatch = useDispatch();

  const [place, setPlace] = React.useState(roomPages[0])
  const [inputValue, setInputValue] = useState([])


  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  //get array of location 

  const arrayOfLocation=roomPages.map(room=>{
    return{
        key:room.id,
        value:room.location,
        label:room.location
    }
  })

  //get the current value of the slider

  // const currentLocation = (event) =>{
  //     const locationChoose= (event.target.value)
  //     setPlace(locationChoose)
  // }

  // Filter with the sliders

  let filteredRooms = roomPages.filter(room=>{
      const matchRoom = room.location === place
      if(matchRoom){
          return true
      }else{
          return false
      }
  })
  

  console.log("place",place);

  console.log("roomPage content", roomPages);
  
  // const currentValueSelect =(event) =>{
  //   const value= event.target.value
  //   setInputValue
  // }


  const roomsToRender = () =>
    roomPages.map((room) => <RoomPageCard key={room.id} {...room} />);

  return (
    <div>
      <h1>Rooms</h1>
        <form style={{width:"15em", marginLeft:"24em", marginBottom:"2em", margin:'auto'}}>
             <Select 
             options={arrayOfLocation} 
             value={place} 
             defaultValue={{ label: "Select a city", value: "" }}
             onChange={(value)=>{console.log(value)
             setPlace(value)}}/>
        </form>
      

      {roomsToRender()}
    </div>
  );
}
