import '../Component-Styling/register.css'
import Footer from "./Footer";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { Card, CardImg, CardGroup, Button, Form, FormGroup, Label, Input} from 'reactstrap'

export default function Signup() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")

  const navigate = useNavigate();

  function register () {
    fetch ('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        repassword
      })
    }).then(res => res.json()).then(data => console.log(data));
    navigate('/login')
  }

  return(

    <div>
      <CardGroup >
        <Card className="justify-content-center border-0 signup-card">
        <h3>Miracle Phone Call</h3>
        <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="exampleFirstname"
              >
              First Name
              </Label>
              <Input
                className='w-50 fields'
                id="exampleFirstname"
                name="First Name"
                placeholder="First Name"
                type="text"
                onChange = {(event) => {
                setFirstName(event.target.value)
                }} value = {firstName}
              />
            </FormGroup>          
      
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="exampleLastName"
              >
                Last Name
              </Label>
              <Input
                className='w-50 fields'
                id="exampleLastName"
                name="Last Name"
                placeholder="Last Name"
                type="text"
                onChange = {(event) => {
                             setLastName(event.target.value)
                           }} value = {lastName}
              />
            </FormGroup>
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
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
                className="me-sm-2"
                for="examplePassword"
              >
                Re-Enter Password
              </Label>
              <Input
                className='w-50 fields'
                id="examplePassword"
                name="password"
                placeholder="seriously don't tell!"
                type="password"
                onChange = {(event) => {
                              setRePassword(event.target.value)}} value={repassword}
              />
            </FormGroup>
            <Button color="primary" className = "m-5 " onClick = {register} 
            style={{backgroundColor: '#514DE9'}}> Register </Button>
          </Form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </Card>
        <Card className='img-card-signup border-0'>
          <CardImg className="register-image"alt="Card image cap" src="../images/pexels-nicolas-postiglioni-1927155.jpg" top width="100%" />
        </Card>
      </CardGroup>
      <Footer />
    </div>
 
  )
}