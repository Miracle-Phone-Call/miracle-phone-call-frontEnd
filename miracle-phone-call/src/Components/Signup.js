import Logo from "./Logo";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")


  return(
    <div>
      <Logo />
      <div className="signup-body">
        <div className="contents">
          <form>
            <label>Username: 
              <input type="text" onChange = {(event) => {
                setUsername(event.target.value)
              }} value = {username}></input>
            </label>
            <br></br>
            <label>First Name: 
            <input type="text" onChange = {(event) => {
                setFirstName(event.target.value)
              }} value = {firstName}></input> 
            </label>
            <br></br>
            <label>Last Name: 
            <input type="text" onChange = {(event) => {
                setLastName(event.target.value)
              }} value = {lastName}></input>
            </label>
            <br></br>
            <label>Password: 
            <input type="password" onChange = {(event) => {
                setPassword(event.target.value)
              }} value = {password}></input>
            </label>
            <br></br>
            <label>Re-Enter Password: 
              <input type="password" onChange = {(event) => {
                setRePassword(event.target.value)}} value={repassword}></input>
            </label>
            <br></br>
            <Link to="/login"><button>Create Account</button></Link>
          </form>
        </div>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="img"/>
      </div>
      <Footer />
    </div>
  )
}