import Logo from "./Logo"
import Footer from "./Footer"

export default function Login() {
  return(
    <div>
      <Logo />
      <div className="login-body">
        <div className="contents">
          <form>
            <label>Username: 
              <input></input>
            </label>
            <br></br>
            <label>Password: 
              <input></input>
            </label>
            <br></br>
            <button>Login</button>
          </form>
        </div>
        <img/>
      </div>
      <Footer />
    </div>
  )
}