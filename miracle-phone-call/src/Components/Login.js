import Logo from "./Logo";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../context/Context";

export default function Login() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  let {username, setUsername} = useContext(Context)
  let {password, setPassword} = useContext(Context)

  return(
    <div>
      <Logo />
      <div className="login-body">
        <div className="contents">
          <form>
          <label>Username: 
              <input type="text" onChange = {(event) => {
                setUsername(event.target.value)
              }} value = {username}></input>
            </label>
            <br></br>
            <label>Password: 
            <input type="password" onChange = {(event) => {
                setPassword(event.target.value)
              }} value = {password}></input>
            </label>
            <br></br>
            <Link to="/chats"><button>Login</button></Link>
          </form>
        </div>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="img"/>
      </div>
      <Footer />
    </div>
  )
}