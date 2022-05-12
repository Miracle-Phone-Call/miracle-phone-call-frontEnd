import Chatbar from "./Chatbar";
import Navbar from "./Navbar";
export default function ChatRoom(){
  return(
    <div>
      <Navbar />
      <form>
        <label>Find a Friend
          <input></input>
          <buttton>search</buttton>
        </label>
      </form>
      <Chatbar />
      <Chatbar />
      <Chatbar />
    </div>
  )
}