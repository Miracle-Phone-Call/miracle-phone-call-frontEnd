import {Link} from "react-router-dom";

export default function Chatbar(){
  return(
    <Link to="/chatroom">
      <div className="chatbar">
        <img/>
        <h6>User</h6>
      </div>
    </Link>
  )
}