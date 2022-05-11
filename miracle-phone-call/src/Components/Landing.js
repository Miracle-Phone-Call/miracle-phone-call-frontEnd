import Logo from "./Logo"
import Footer from "./Footer"

export default function Landing(){
  return (
  <div>
    <div className="contents">
      <Logo />
      <h4>Connect with family members with privacy</h4>
      <button>Sign UP</button>
      <button>Login</button>
    </div>
    <img className="landing-img"/>
    <Footer />
  </div>
)}
