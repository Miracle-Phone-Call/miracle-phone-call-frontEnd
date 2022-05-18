import '../Component-Styling/login.css'
import Footer from "./Footer";
import { useContext } from "react";
import Context from "../context/Context";
import { Link } from 'react-router-dom'
import { Card, CardImg, CardGroup, Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Login() {

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
      <CardGroup className="card-group">
        <Card body color="warning" className="justify-content-center">
        <h3>Miracle Phone Call</h3>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link> here</p>
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
            <Button color="primary" className = "mt-5" onClick = {login}>Login</Button>
          </Form>
        </Card>
        <Card color="warning" >
          <CardImg className="login-image" alt="Card image cap" src="../images/pexels-nicolas-postiglioni-1927155.jpg" />
        </Card> 
      </CardGroup>
      <Footer />
    </div>
  )
}