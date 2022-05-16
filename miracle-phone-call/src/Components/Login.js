import Logo from "./Logo";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

export default function Login() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  let {username, setUsername} = useContext(Context)
  let {password, setPassword} = useContext(Context)


  function login () {
    fetch ('http://localhost:3001/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        password
      })
    }).then(res => res.json()).then(data => console.log(data));
  }
  return(
    <div className="login-container">
      <div className="login-body">
        <div className="login-contents">
          <Logo />
          <form className="login-form">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link> here</p>
            <label>Username: </label>
            <input type="text" onChange = {(event) => {
              setUsername(event.target.value)
            }} value = {username}></input>
            
            <label>Password: </label>
            <input type="password" onChange = {(event) => {
              setPassword(event.target.value)
            }} value = {password}></input>
            <br></br>
            <button onClick = {login}>Login</button>
          </form>
        </div>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="login-img"/>
      </div>
      <Footer />
    </div>
  )
}