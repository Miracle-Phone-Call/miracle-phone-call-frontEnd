import '../Component-Styling/landing.css'
import Footer from "./Footer"
import {Link} from "react-router-dom"
import {Card, CardGroup, CardImg, Button, TabContent} from "reactstrap"

export default function Landing(){
  return (
    <div className="pageBody" >
      <CardGroup className="topPage img-fluid">
      <Card className="border-0" style={{backgroundColor: '#D4AEE6', borderRadius: 50}}>   </Card>
      <Card className="border-0 card-img-top" style={{backgroundColor: '#AB0AF7', borderRadius: 50}}>
          <CardImg style={{borderRadius: 50}} alt="Card image cap"  src="../images/miracleLogo.png"/>
        </Card> 
     
        <Card className="justify-content-center border-0" style={{backgroundColor: '#AB0AF7' , color: 'white', borderRadius: 50}}>
        <img src="../images/angeltelephone.png" height="20%" width="20%" 
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
        <h2 style={{textShadow: '2px 2px blue'}}>Miracle Phone Call</h2>
          <br></br>
          
          <p style={{fontSize: 16}}>The mission of Miracle Phone Call is to connect undocumented immigrants, particularly those who are facing separation through deportation, using an end-to-end encryption messaging website.</p>
        </Card>
       
        <Card className="border-0" style={{backgroundColor: '#D4AEE6'}}>

        </Card>
     
      </CardGroup>
    
      <Link to="/signup"><Button
            className="signbutton"
            color="primary"
            size="lg"
            style={{backgroundColor: '#514DE9', borderRadius: 45}}
          >
            Sign Up
          </Button></Link>
          <br></br>
          <br></br>
    
      <Link to="/login"><Button className="loginbutton" color="primary" size="lg"
       style={{backgroundColor: '#514DE9', borderRadius: 45}}
      >Login
          </Button></Link>
          <br></br>
          <br></br>
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
