import '../Component-Styling/landing.css'
import Footer from "./Footer"
import {Link} from "react-router-dom"
import {Card, CardGroup, CardImg, Button, TabContent} from "reactstrap"

export default function Landing(){
  return (
    <div className="pageBody" >
      <br></br>
      <CardGroup className="topPage img-fluid">
      {/* <Card className="border-0" style={{backgroundColor: '#D4AEE6', borderRadius: 5}}>   </Card> */}
      <Card className="img-card border-0 card-img-top justify-content-center" style={{}}>
          <CardImg className='landing-image shadow p-3 mb-5 bg-white rounded' style={{borderRadius: 5}} alt="Card image cap"  src="../images/hugs.png"/>
          <br></br>
        </Card> 
     
        <Card className="border-0" style={{color: 'black'}}>
        <img src="../images/Miracle Phone Call Logo wo text (4).png "  
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: 150}}/>
        <h2>Miracle Phone Call</h2>
          
          <p className="mission" style={{fontSize: 16}}>The mission of Miracle Phone Call is to connect undocumented immigrants, particularly those who are facing separation through deportation, using an end-to-end encryption messaging website.</p>
          <Link to="/signup"><Button
            className="signbutton"
            color="primary"
            size="lg"
            style={{backgroundColor: '#514DE9', borderRadius: 5, width: 150}}
          >
            Sign Up
          </Button></Link>
          <br></br>
    
      <Link to="/login"><Button className="loginbutton" color="primary" size="lg"
       style={{backgroundColor: '#514DE9', borderRadius: 5, width: 150}}
      >Login
          </Button></Link>
          <br></br>
          <br></br>
          <br></br>
        </Card>
       
        {/* <Card className="border-0" style={{}}>

        </Card> */}
     
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
