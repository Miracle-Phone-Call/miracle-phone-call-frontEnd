import '../Component-Styling/chats.css'

export default function Chatbar({friend}){
  return(
    <div className='contact-bar p-3'>
      <p>{friend.username}</p>
    </div>
  )
}