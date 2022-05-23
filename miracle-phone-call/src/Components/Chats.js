import '../Component-Styling/chats.css'
import Chatbar from "./Chatbar";
import CustomNavbar from "./Navbar";
import Chatbox from './Chatbox';
import Context from "../context/Context";
import { useContext, useEffect, useState } from "react";

export default function Chats(){
  let{user} = useContext(Context)
  const [contacts, setContacts] = useState([]);

  //REMEMBER TO TAKE THIS OUT AND ADD CONTEXT FOR USER
  // let user = {
  //   id : 9,
  //   username: "josemaz"
  // }
  //
  useEffect(() => {
    fetch(`http://localhost:3001/chat/${user.id}/contacts`).then(res => res.json()).then(data => {
      setContacts(data)
    });
  }, [])

  console.log(contacts);

  
  
  return(
  <div>
    <CustomNavbar/>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2 contact-sidebar'>
          {contacts && contacts.map(friend => <Chatbar friend = {friend} key={friend.username}/>)}
        </div>
        <div className='col-sm-10'>
          {/* MESSAGES ARRAY GOES HERE */}
          <Chatbox />
        </div>
      </div>
    </div>
  </div>
  )
}