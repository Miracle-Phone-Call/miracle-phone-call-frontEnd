import '../Component-Styling/message.css'

export default function Message({message, own}){
  return (
    <div className= {own ? "message own" : "message"}>
      <div className="messageTop">
      </div>
      <p className="messageText"> {message.message} </p>
    </div>
  )
}