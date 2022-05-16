import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";

export default function Profile(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return(
    <div className="profile-container">
      <Navbar />
      <h1>User Profile Page</h1>
      <div className="profile-form">
        <form className="profile-form">
          <label>First Name: </label>
          <input type="text" onChange = {(event) => {
              setFirstName(event.target.value)
            }} value = {firstName}></input> 
          
          <label>Last Name: </label>
          <input type="text" onChange = {(event) => {
              setLastName(event.target.value)
            }} value = {lastName}></input>
          <br></br>
          <Link to="/login"><button>Update Profile</button></Link>
        </form>
      </div>
      <div className="delete-div">
        <p>Don’t need your account?</p>
        <Link to="/signup"><button>Delete Account</button></Link>
      </div>
      <Footer />
    </div>
  )
}