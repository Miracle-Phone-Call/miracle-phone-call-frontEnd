import Logo from "./Logo"
import Footer from "./Footer"
import {Link} from "react-router-dom"

export default function Landing(){
  return (
  <div className="landing-container">
    <div className="landing-body">
      <div className="landing-contents">
        <Logo />
        <h4>Connect to family members with privacy</h4>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
      <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="landing-img"/>
    </div>
    <Footer />
  </div>
)}
