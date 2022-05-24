import '../Component-Styling/landing.css'
import Footer from "./Footer"
import {Link} from "react-router-dom"
import {Card, CardGroup, CardImg, Button, TabContent} from "reactstrap"

export default function Landing(){
  return (
    <div className="pageBody" >
      <CardGroup className="topPage img-fluid">
      <Card className="border-0" style={{backgroundColor: '#D4AEE6', borderRadius: 5}}>   </Card>
      <Card className="border-0 card-img-top justify-content-center" style={{ borderRadius: 5}}>
          <CardImg className='landing-image' style={{borderRadius: 5,}} alt="Card image cap"  src="../images/hugs.png"/>
          <br></br>
          <Link to="/signup"><Button
            className="signbutton"
            color="primary"
            size="lg"
            style={{backgroundColor: '#514DE9', borderRadius: 5, width: 150}}
          >
            Sign Up
          </Button></Link>
          <br></br>
          <br></br>
    
      <Link to="/login"><Button className="loginbutton" color="primary" size="lg"
       style={{backgroundColor: '#514DE9', borderRadius: 5, width: 150}}
      >Login
          </Button></Link>
        </Card> 
     
        <Card className="justify-content-top border-0" style={{color: 'black', borderRadius: 5}}>
        <img src="../images/Miracle Phone Call Logo wo text (1).png "  
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
        <h2>Miracle Phone Call</h2>
          <br></br>
          
          <p style={{fontSize: 16}}>The mission of Miracle Phone Call is to connect undocumented immigrants, particularly those who are facing separation through deportation, using an end-to-end encryption messaging website.</p>
        </Card>
       
        <Card className="border-0" style={{}}>

        </Card>
     
      </CardGroup>
    
      
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
