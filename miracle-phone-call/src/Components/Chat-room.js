import Chat from "./Chat";
export default function ChatRoom(){
  return(
    <div>
      <Navbar />
      <form>
        <label>Find a Friend
          <input></input>
        </label>
      </form>
      <Chat />
    </div>
  )
}