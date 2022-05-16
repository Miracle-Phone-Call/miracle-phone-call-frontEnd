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

  function register () {
    fetch ('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        repassword
      })
    }).then(res => res.json()).then(data => console.log(data));
  }

  return(
    <div className="signup-container">
      <div className="signup-body">
        <div className="signup-contents">
          <Logo />
          <p>Already have an account, go back to <Link to="/login">Login In</Link></p>
          <form className="signup-form">
            <label>Username: </label>
              <input type="text" onChange = {(event) => {
                setUsername(event.target.value)
              }} value = {username}></input>

            <label>First Name (optional): </label>
            <input type="text" onChange = {(event) => {
                setFirstName(event.target.value)
              }} value = {firstName}></input> 
            
            <label>Last Name (optional): </label>
            <input type="text" onChange = {(event) => {
                setLastName(event.target.value)
              }} value = {lastName}></input>
            
            <label>Password: </label>
            <input type="password" onChange = {(event) => {
                setPassword(event.target.value)
              }} value = {password}>

            </input>
            
            <label>Re-Enter Password: </label>
              <input type="password" onChange = {(event) => {
                setRePassword(event.target.value)}} value={repassword}>
              </input>
            <br></br>
            <button onClick = {register}>Create Account</button>
          </form>
        </div>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="signup-img"/>
      </div>
      <Footer />
    </div>
  )
}