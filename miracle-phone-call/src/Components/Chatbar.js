import '../Component-Styling/chats.css'
import Context from "../context/Context";


//showChat === boolean (true, false)
//setShowChat === function used to toggle the boolean
//const [showChat, setShowChat] = useState(false);





// function handleConnection() {
//   setConnectedPerson(friend) 
// }
// function seeChat() {
//   return (
//   <div className='chat-window'>
//     <div>
//       <p>hello chat</p>
//     </div>
//   </div>
// )}

export default function Chatbar({friend}){
  console.log(friend)
  return(
    <div className='contact-bar p-3'>
      <p>{friend.username}</p>
    </div>
  )
}