import '../Component-Styling/chats.css'
import Chatbar from "./Chatbar";
import CustomNavbar from "./Navbar";
import Context from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { Input } from 'reactstrap';

export default function Chats(){
  let{user, setUser, message} = useContext(Context)
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

    // function checkAuth () {
    //   console.log("This function ran")
    //   let loggedUser = localStorage.getItem('user')
    //   console.log(loggedUser);
    //   if (loggedUser.username) {
    //     setUser(JSON.parse(loggedUser))
    //   }
    // }
    // checkAuth();
  }, [])
  
  return(
  <div>
    <CustomNavbar/>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-2 contact-sidebar'>
          {contacts && contacts.map(friend => <Chatbar friend = {friend} key={friend.username}/>)}
        </div>
        <div className='col-sm-10 align-self-baseline'>
          {/* MESSAGES ARRAY GOES HERE */}
          <Input type="text"/>
          {/* <Button>Send</Button> */}
        </div>
      </div>
    </div>
  </div>
  )
}