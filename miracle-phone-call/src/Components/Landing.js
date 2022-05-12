import Logo from "./Logo"
import Footer from "./Footer"

export default function Landing(){
  return (
  <div className="landing-container">
    <div className="landing-body">
      <div className="contents">
        <Logo />
        <h4>Connect with family members with privacy</h4>
        <button>Sign UP</button>
        <button>Login</button>
      </div>
      <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="landing-img"/>
    </div>
    <Footer />
  </div>
)}
