import CustomNavbar from "./Navbar";
import Context from "../context/Context";
import SearchResult from "./SearchResult";
import { useContext, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from 'reactstrap'
import { useNavigate } from "react-router-dom";


export default function Search () {
    let{search, setSearch, allUsers, setAllUsers, user, setViewPerson} = useContext(Context)
    
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3001/search/${user.username}`).then(res => res.json()).then(data => setAllUsers(data));
    }, [])
    
    function viewProfile (username) {
      navigate(`/profile/${username}`)
    }

    let filteredUsers = allUsers.filter(friend => friend.username.includes(search));
    let initialUser = allUsers.slice(0, 5)
    
    return(
        <div>
          <CustomNavbar />
          <Input className='w-50 searchBar mt-3 mb-3' 
            placeholder='Find a friend' 
            onChange = {(event) => {
              setSearch(event.target.value)
            }} 
            value = {search} 
          />
          {search !== "" ? (
            filteredUsers && <SearchResult array = {filteredUsers} />
          ) : (
            <div>
              <h3>People you might know</h3>
                {initialUser.map(friend => (
                  <div>
                    <Card
                    >
                      <CardBody>
                        <CardTitle tag="h5">
                          {friend.first_name} {friend.last_name}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          {friend.username}
                        </CardSubtitle>
                        <CardText>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <Button onClick={() => {
                          viewProfile(friend.username) 
                          setViewPerson(friend);
                          }} >
                          View Profile
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
              ))}
            </div>
          )}
        </div>
      )
}