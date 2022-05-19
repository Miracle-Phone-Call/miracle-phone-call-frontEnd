import Message from "./Message";
import Navbar from "./Navbar";
import Context from "../context/Context";
import { useContext, useState } from "react";

export default function ChatRoom(){
let {message, setMessage} = useContext(Context)
  return(
    <div>
      <div>
        <Message />
      </div>
      <form>
        <label>Message: 
        <input type="text" onChange = {(event) => {
                setMessage(event.target.value)
              }} value = {message}></input>
          <button>send</button>
        </label>
      </form>
    </div>
  )
}