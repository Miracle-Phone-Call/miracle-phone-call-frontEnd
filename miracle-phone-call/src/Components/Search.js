import CustomNavbar from "./Navbar";
import Context from "../context/Context";
import SearchResult from "./SearchResult";
import { useContext, useEffect } from "react";
import { Input } from 'reactstrap'


export default function Search () {
    let{search, setSearch, allUsers, setAllUsers, user} = useContext(Context)

    //REMEMBER TO TAKE THIS OUT AND ADD REAL USER CONTEXT
    // let user = {
    //     username: "josemaz"
    // }
    //
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:3001/search/${user.username}`).then(res => res.json()).then(data => setAllUsers(data));
    }, [])

    let filteredUsers = allUsers.filter(friend => friend.username.includes(search) && !friend.username !== user.username);
    
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
          ) : null}
        </div>
      )
}