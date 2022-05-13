import Logo from "./Logo"
import Footer from "./Footer"
import {Link} from "react-router-dom"

export default function Landing(){
  return (
  <div className="landing-container">
    <div className="landing-body">
      <div className="contents">
        <Logo />
        <h4>Connect with family members with privacy</h4>
        <Link to="/signup"><button>Sign UP</button></Link>
        <Link to="/login"><button>LOGIN</button></Link>
      </div>
      <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="img"/>
    </div>
    <Footer />
  </div>
)}
