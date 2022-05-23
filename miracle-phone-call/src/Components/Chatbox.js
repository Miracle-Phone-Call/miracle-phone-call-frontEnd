import '../Component-Styling/chats.css'
import Context from "../context/Context";

export default function Chatbox(){
  return (
    <div className="chat-window">
      <div className="chat-body">
      </div>
      <div className="chat-footer">
        <input className="w-100 send-input" type="text" placeholder="Hey..."/>
        <button className="send-button">Send</button>
      </div>
    </div>
  )
};



// export default Chatbox(){
// return (
// <div className="chat-window">
//     <div className="chat-header">
//      <p>Live Chat</p>
//      </div>
//     <div className="chat-body">
//         {messageList.map((messageContent) => {
//             return <h1>{messageContent.message}</h1>
//         })}
//     </div>
//     <div className="chat-footer">
//         <input type="text" placeholder="Hey..." 
//         onChange={
//         (event) => {
//             setCurrentMessage(event.target.value);
//         }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//     </div>
// </div>

// )
// }