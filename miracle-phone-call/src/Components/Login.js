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
    <div className="login-container">
      <div className="login-body">
        <div className="login-contents">
          <Logo />
          <form className="login-form">
            <label>Username: </label>
            <input type="text" onChange = {(event) => {
              setUsername(event.target.value)
            }} value = {username}></input>
            
            <label>Password: </label>
            <input type="password" onChange = {(event) => {
              setPassword(event.target.value)
            }} value = {password}></input>
            <br></br>
            <Link to="/chats"><button>Login</button></Link>
          </form>
        </div>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="login-img"/>
      </div>
      <Footer />
    </div>
  )
}