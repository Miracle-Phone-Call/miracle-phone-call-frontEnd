import '../Component-Styling/login.css'
import Footer from "./Footer";
import { useState, useContext } from "react";
import Context from "../context/Context";
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardImg, CardGroup, Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let {user, setUser} = useContext(Context)

  const navigate = useNavigate();

  function login (event) {
    event.preventDefault();
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
    }).then(res => res.json()).then(data => {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/chats');
    });
  }

  return(
    <div>
      <CardGroup>
        <Card className="justify-content-center" >
        <h3>Miracle Phone Call</h3>
        
        <Form inline onSubmit={login}>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="exampleUsername"
              >
                Username
              </Label>
              <Input
                className='w-50 fields'
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
                className='w-50 fields'
                id="examplePassword"
                name="password"
                placeholder="don't tell!"
                type="password"
                onChange = {(event) => {
                            setPassword(event.target.value)
                          }} value = {password}
              />
            </FormGroup>
            <Button color="primary" className = "m-5" type="submit" style={{backgroundColor: '#514DE9'}}>Login</Button>
            
          </Form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </Card>
        <Card>
          <CardImg className="login-image" alt="Card image cap" src="../images/pexels-nicolas-postiglioni-1927155.jpg" />
        </Card> 
      </CardGroup>
      <Footer />
    </div>
  )
}