import Chatbar from "./Chatbar";
import Navbar from "./Navbar";
import Context from "../context/Context";
import { useContext, useState } from "react";

export default function Chats(){
  let{search, setSearch} = useContext(Context)
  return(
    <div>
      <Navbar />
      <form>
        <label>Find a Friend
          <input type="text" onChange = {(event) => {
                setSearch(event.target.value)
              }} value = {search}></input>
          <buttton>search</buttton>
        </label>
      </form>
      <Chatbar />
      <Chatbar />
      <Chatbar />
    </div>
  )
}