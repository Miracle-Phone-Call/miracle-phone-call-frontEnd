import { useContext, useState } from "react"
import Context from "../context/Context"
import { Link, useNavigate } from "react-router-dom";
import {Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap'

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#1D1E2C"
};

export default function CustomNavbar(){
  let {user, setUser} = useContext(Context)
  const [collapsed, setCollapsed] = useState(true)
  
  const navigate = useNavigate();
  
  const toggleNavbar = () => setCollapsed(!collapsed);

  function logOut () {
    setUser(null);
    localStorage.clear();
    navigate('/login')
  }


  return(
    <div>
  <Navbar
    className="sticky-top"
    color="warning"
    expand="md"
    // fixed="top"
    light
  >
    <NavbarBrand href="/">
      Miracle Phone Call
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavbar}/>
    <Collapse navbar isOpen={!collapsed}>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <Link to="/search" style={linkStyle}>{/* {`/search/${user.username}`} */}
            Find Friends
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/chats" style={linkStyle}>{/* {`/chat/${user.username}`} */}
            Inbox
          </Link>
        </NavItem>
        
      </Nav>
      <img src="https://pixy.org/download/4770772/" width = {30}></img>
      <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret>
            {user.username}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/profile" style={linkStyle}>
                Your Profile
              </Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={logOut}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </Collapse>
  </Navbar>
</div>
  )
}