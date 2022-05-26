import CustomNavbar from "./Navbar";
import Context from "../context/Context";
import SearchResult from "./SearchResult";
import ProfileCard from "./ProfileCard";
import { useContext, useEffect } from "react";
import { Input } from 'reactstrap'
import { useNavigate } from "react-router-dom";


export default function Search () {
    let{search, setSearch, allUsers, setAllUsers, user } = useContext(Context)
    
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3001/search/${user.username}`).then(res => res.json()).then(data => setAllUsers(data));
    }, [])
    
    function viewProfile (username) {
      navigate(`/profile/${username}`)
    }

    let filteredUsers = allUsers.filter(friend => friend.username.toLowerCase().includes(search) || friend.first_name.toLowerCase().includes(search));
    let initialUser = allUsers.slice(0, 6)
    
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
            filteredUsers && <SearchResult array = {filteredUsers} viewProfile= {viewProfile}/>
          ) : (
            <div>
              <h3 className="pt-5">People you might know</h3>
              <div className="container-fluid">
                <div className="row">
                  {initialUser.map(data => (
                    <ProfileCard data = {data} key = {data.id} viewProfile = {viewProfile}/>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )
}