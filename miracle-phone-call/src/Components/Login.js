import Logo from "./Logo";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import { Card, CardBody, CardImg, CardGroup, CardTitle, Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Login() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  let {username, setUsername} = useContext(Context)
  let {password, setPassword} = useContext(Context)


  function login () {
    fetch ('http://localhost:3001/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        password
      })
    }).then(res => res.json()).then(data => console.log(data));
  }
  return(
    <div>
      <CardGroup>
        <Card body color="light">
        <h3>Miracle Phone Call</h3>
        <Form inline>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="exampleUsername"
              >
                Username
              </Label>
              <Input
                id="exampleUsername"
                name="username"
                placeholder="somethingKool"
                type="text"
                onChange = {(event) => {
                            setUsername(event.target.value)
                          }} value = {username}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="examplePassword"
              >
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="don't tell!"
                type="password"
                onChange = {(event) => {
                            setPassword(event.target.value)
                          }} value = {password}
              />
            </FormGroup>
            <Button color="primary" onClick = {login}>Login</Button>
          </Form>
        </Card>
        <Card body color="light">
          <CardImg alt="Card image cap" src="../images/pexels-nicolas-postiglioni-1927155.jpg" top width="100%" />
        </Card>
      </CardGroup>
      <Footer />
    </div>
    // <div className="login-container">
    //   <div className="login-body">
    //     <div className="login-contents">
    //       <Logo />
    //       <form className="login-form">
    //       <p>Don't have an account? <Link to="/signup">Sign Up</Link> here</p>
    //         <label>Username: </label>
    //         <input type="text" onChange = {(event) => {
    //           setUsername(event.target.value)
    //         }} value = {username}></input>
            
    //         <label>Password: </label>
    //         <input type="password" onChange = {(event) => {
    //           setPassword(event.target.value)
    //         }} value = {password}></input>
    //         <br></br>
    //         <button onClick = {login}>Login</button>
    //       </form>
    //     </div>
    //     <img src="../images/pexels-nicolas-postiglioni-1927155.jpg" className="login-img"/>
    //   </div>
    //   <Footer />
    // </div>
  )
}