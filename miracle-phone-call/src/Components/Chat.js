import Message from "./Message";
import Navbar from "./Navbar";
export default function Chat(){
  return(
    <div>
      <Navbar />
      <div>
        <Message />
      </div>
      <form>
        <label>Message: 
          <input></input>
          <button>send</button>
        </label>
      </form>
    </div>
  )
}