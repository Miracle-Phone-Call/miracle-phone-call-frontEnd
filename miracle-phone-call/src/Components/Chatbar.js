import '../Component-Styling/chats.css'
import Context from "../context/Context";

// function handleConnection() {
//   setConnectedPerson(friend) 
// }
function seeChat() {
  return (
  <div className='chat-window'>
    <div>
      <p>hello chat</p>
    </div>
  </div>
)}

export default function Chatbar({friend}){
  console.log(friend)
  return(
    <div className='contact-bar p-3' onClick={seeChat}>
      <p>{friend.username}</p>
    </div>
  )
}