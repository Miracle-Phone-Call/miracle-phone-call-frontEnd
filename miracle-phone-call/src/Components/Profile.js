import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../context/Context";
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, FormGroup} from 'reactstrap'
import CustomNavbar from './Navbar';

export default function Profile(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [retypeNewPassword, setRetypeNewPassword] = useState("")
  const [showBioForm , setShowBioForm] = useState(false)
  const [showResetPassword, setshowResetPassword] = useState(false)
  const [modal, setModal] = useState(false);
  const {user} = useContext(Context)

  const navigate = useNavigate();

  async function updateBio () {
    console.log(firstName, lastName);
    await fetch (`http://localhost:3001/users/${user.username}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName
      })
    }).then(res => res.json()).then(data => console.log(data));
  }

  async function changePassword (e) {
    e.preventDefault();
    await fetch (`http://localhost:3001/users/${user.username}/password`, {
      method: 'PATCH',
      headers: {
          'content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentPassword, 
        newPassword, 
        retypeNewPassword
      })
    }).then(res => res.json()).then(data => console.log(data));
  }

  function deleteAccount () {
    fetch (`http://localhost:3001/users/${user.username}`, {
      method: 'DELETE',
    }).then(res => res.json()).then(data => {
      console.log(data)
      navigate('/login');
    });
  }
  
  return(
    <>
    <CustomNavbar />
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3 mt-5'>
        <img src = "https://pixy.org/download/4770772/" width={200} border-radius={50}></img>
        </div>
        <div className='col-sm-9 mt-5'>
          {user ? <h2>Name:{user.first_name} {user.last_name}</h2> : null}
          {!showBioForm ? null : ( 
            <div>
              <Label className="me-sm-2" for="firstName">
              First Name :
              </Label>
              <Input
                id="firstName"
                name="First Name"
                placeholder= "john"
                type="text"
                onChange = {(event) => {setFirstName(event.target.value)}} 
                value = {firstName}
              />
              <Label className="me-sm-2" for="lastName">
              Last Name :
              </Label>
              <Input
                id="lastName"
                name="Last Name"
                placeholder= "Doe"
                type="text"
                onChange = {(event) => {setLastName(event.target.value)}} 
                value = {lastName}
              />
              <div>
              <Button className="m-5" color="warning" onClick={() => setShowBioForm(false)}>
                Cancel
              </Button>
              </div>
              <div>
              <Button className="m-5" color="warning" onClick={() => updateBio()}>
                Save Changes
              </Button>
              </div>
            </div> 
          )}
          {showBioForm ? null : (
          <div>
          <Button className="m-5" color="warning" onClick={() => setShowBioForm(true)}>
            Update Info
          </Button>
          </div>
          )}
          {!showResetPassword ? null : ( 
            <div>
              <Form onSubmit={changePassword}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Label className="me-sm-2" for="currentPassword">
                  Current Password :
                  </Label>
                  <Input
                    id="currentPassword"
                    name="Current Password"
                    placeholder= "Type current Password"
                    type="password"
                    onChange = {(event) => {setCurrentPassword(event.target.value)}} 
                    value = {currentPassword}
                  />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0"> 
                  <Label className="me-sm-2" for="newPassword">
                  New Password :
                  </Label>
                  <Input
                    id="newPassword"
                    name="New Password"
                    placeholder= "Type new password"
                    type="password"
                    onChange = {(event) => {setNewPassword(event.target.value)}} 
                    value = {newPassword}
                  />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Label className="me-sm-2" for="retypeNewPassword">
                  Retype New Password :
                  </Label>
                  <Input
                    id="retypeNewPassword"
                    name="New Retype New Password"
                    placeholder= "Re-Type new password"
                    type="password"
                    onChange = {(event) => {setRetypeNewPassword(event.target.value)}} 
                    value = {retypeNewPassword}
                  />
                </FormGroup>
                <div>
                  <Button color="warning" className="m-5" onClick={() => setshowResetPassword(false)}>
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button className="m-5" color="warning" type="submit">
                    Confirm
                  </Button>
                </div>
              </Form>
            </div> 
          )}
          
          {showResetPassword ? null : (
            <div>
            <Button className="m-5" color="danger" onClick={() => setshowResetPassword(true)}>
              Change Password
            </Button>
            </div>
          )}

          <div>
          <Button className="m-5"  color="danger" onClick={() => setModal(true)}>
            Delete Account
          </Button>
          </div>

          <Modal isOpen={modal} autoFocus = {true} fullscreen="md" toggle={setModal} centered={true}>

            <ModalBody>
              Are you sure you want to delete the account?
            </ModalBody>

            <ModalFooter>
              <Button color="danger" onClick={() => deleteAccount()}>
                Delete Account
              </Button>
              {' '}
              <Button onClick={() => setModal(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

    </div>
    </>
  )
}