import { useContext } from "react"
import Context from "../context/Context"

export default function Navbar(){
  let {username} = useContext(Context)
  return(
    <div className="navbar">
      <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="navbar-img"/>
      <div className="nav-profile">
        <p>{username}</p>
        <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="navbar-img"/>
      </div>
    </div>
  )
}