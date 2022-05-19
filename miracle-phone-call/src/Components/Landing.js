
import Footer from "./Footer"
import {Link} from "react-router-dom"
import {Card, CardGroup, CardImg, Button} from "reactstrap"

export default function Landing(){
  return (
    <div>
      <CardGroup>
        <Card className="justify-content-center">
          <h3>Miracle Phone Call</h3>
          <br></br>
          <p>The mission of Miracle Phone Call is to connect undocumented immigrants, particularly those who are facing separation through deportation, using an end-to-end encryption messaging website. By privately connecting through our platform, undocumented immigrants can maintain connection with their loved ones without fear of their right to privacy being ignored.</p>
          <Link to="/login"><Button block color="warning" size="lg">Login
          </Button></Link>
          <br></br>
          <Link to="/signup"><Button
            block
            color="warning"
            size="lg"
          >
            Sign Up
          </Button></Link>
        </Card>
        <Card>
          <CardImg className="login-image" alt="Card image cap" src="../images/pexels-nicolas-postiglioni-1927155.jpg" />
        </Card> 
      </CardGroup>
      <Footer />
    </div>
  // <div className="landing-container">
  //   <div className="landing-body">
  //     <div className="landing-contents">
  //       <Logo />
  //       <h4>Connect to family members with privacy</h4>
  //       <Link to="/signup"><button>Sign Up</button></Link>
  //       <Link to="/login"><button>Login</button></Link>
  //     </div>
  //     <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="landing-img"/>
  //   </div>
  //   <Footer />
  // </div>
)}
