import '../Component-Styling/chats.css'
import Chatbar from "./Chatbar";
import CustomNavbar from "./Navbar";
import Context from "../context/Context";
import Message from './Message'
import { useContext, useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client'

export default function Chats(){
  let{ user } = useContext(Context)
  const [conversation, setConversations] = useState([]);
  const [currentChat , setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  //socket use states
  const socket = useRef()

  const scrollRef = useRef()

  ////////
  useEffect(() => {
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender_id: data.senderId,
        message: data.message,
      })
    })
    console.log(arrivalMessage)
  }, [arrivalMessage]);

  ////
  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender_id) &&
    setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])


  //////
  useEffect(() => {
    socket.current.emit("addUser", user.id)
    socket.current.on("getUsers", users => {
      console.log(users)
    })
  }, [user])

  useEffect(() => { 
    fetch(`http://localhost:3001/chat/${user.id}`).then(res => res.json()).then(data => {
      setConversations(data)
    })

  }, [])

  useEffect(() => {
    const getMessages = async () => {
      await fetch(`http://localhost:3001/messages/${currentChat.id}`).then(res => res.json()).then(data => setMessages(data))
    }
    getMessages()
  }, [currentChat]);

  async function handleSubmit (e) {
    e.preventDefault();

    ///////////////
    const recieverId = currentChat.members.find(member => member !== user.id)

    socket.current.emit("sendMessage", {
      sender_id : user.id,
      recieverId,
      message : newMessage
    })

    await fetch(`http://localhost:3001/messages`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        conversation_id: currentChat.id,
        message: newMessage,
        sender_id: user.id,
      })
    }).then(res => res.json()).then(data => {
      setMessages([...messages, data]);
      setNewMessage("");
      console.log(messages)
    })
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])

  

  return(
  <div>
    <CustomNavbar/>
    <div className='container-fluid chat'>
      <div className='row'>
        <div className='col-sm-2 conversation-sidebar'>
          {conversation && conversation.map(friend => (
            <div onClick = {() => setCurrentChat(friend)}>
              <Chatbar conversation = {friend} currentUser = {user}/>
            </div>
          ))}
        </div>
        <div className='col-sm-10'>
          {/* MESSAGES ARRAY GOES HERE */}
          {currentChat ? (
            <div className='chatbox'>
              <div className='chatBoxWrapper'>
                <div className='chatBoxTop'>
                  {messages.map(m => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender_id === user.id}/>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className='chatBoxBottom'>
                  <textarea 
                  className='chatMessageInput' 
                  placeholder='Write something....' 
                  onChange={(e) => setNewMessage(e.target.value)}
                  value = {newMessage}> </textarea>
                  <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <img className = "beginChatPic" src= "../images/begin_chat_pic.png"/>
              <p>Connect with family on the Find Family tab </p>
              <p>Click on a chat to view the conversation</p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  </div>
  )
}