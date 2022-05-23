import '../Component-Styling/chats.css'
import Context from "../context/Context";
// import Chatbox from './Chatbox';
// import React, {useState} from "react";

//showChat === boolean (true, false)
//setShowChat === function used to toggle the boolean
//const [showChat, setShowChat] = useState(false);


// function handleConnection() {
//   setConnectedPerson(friend) 
// }
function seeMessage() {
  return 
}

export default function Chatbar({friend}){
  // console.log(friend)
  return(
    <div>
      <div className='contact-bar p-3' onClick={seeMessage}>
        <p>{friend.username}</p>
      </div>
    </div>
  )
}




// const [showChat, setShowChat] = useState(false);

//   function toggleChat() {
//     return (
//       setShowChat(true)
//     ) 
//   }