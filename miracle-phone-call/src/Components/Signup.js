import Logo from "./Logo"
import Footer from "./Footer"

export default function Signup() {
  return(
    <div>
      <Logo />
      <div className="signup-body">
        <div className="contents">
          <form>
            <label>Username: 
              <input></input>
            </label>
            <br></br>
            <label>First Name: 
              <input></input>
            </label>
            <br></br>
            <label>Last Name: 
              <input></input>
            </label>
            <br></br>
            <label>Email: 
              <input></input>
            </label>
            <br></br>
            <label>Password: 
              <input></input>
            </label>
            <br></br>
            <label>Re-Enter Password: 
              <input></input>
            </label>
            <br></br>
            <button>Create Account</button>
          </form>
        </div>
        <img/>
      </div>
      <Footer />
    </div>
  )
}