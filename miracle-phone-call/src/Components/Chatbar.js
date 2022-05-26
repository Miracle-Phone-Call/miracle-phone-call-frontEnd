import { useEffect, useState } from 'react'
import '../Component-Styling/chats.css'

export default function Chatbar({conversation, currentUser}){
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const friendId = conversation.members.find(id => id !== currentUser.id)
    const getUser = async () => {
      await fetch(`http://localhost:3001/users?userId=${friendId}`).then(res => res.json()).then(data => {
        setUser(data)
    })
    }

    getUser()
  }, [currentUser, conversation])

  return(
    <div className='mt-5 conversation'>
      <img 
        className='conversationImg'
        src = "https://pixy.org/download/4770772/"
      />
      <span className='conversationName'>{user && user.username}</span>
    </div>
  )
}