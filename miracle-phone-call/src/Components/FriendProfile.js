import { useContext } from "react";
import Context from "../context/Context";
import CustomNavbar from "./Navbar";
import '../Component-Styling/search.css'
import { Button } from "reactstrap";

export default function FriendProfile () {

    const { user, viewPerson, setViewPerson } = useContext(Context)

    async function addContact (id) {
        await fetch('http://localhost:3001/search/add', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user_id : user.id,
                friend_id : id
            })
        }).then(res => res.json()).then(data => console.log(data))

        await fetch('http://localhost:3001/chat', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                sender_id : user.id,
                reciever_id : id
            })
        }).then(res => res.json()).then(data => console.log(data))
    }
    
    return (
        <div>
            <CustomNavbar/>
            <div className="container-fluid">
                <div className="row m-5 friendProfile">
                    <div className="col-md-6">
                        <img src = "https://pixy.org/download/4770772/" className="friendProfilePic"/>
                        <p className="m-2">{viewPerson.username}</p>
                    </div>
                    <div className="col-md-6"> 
                        <h2 className= "m-5">{viewPerson.first_name.toUpperCase()} {viewPerson.last_name.toUpperCase()}</h2>
                        <p className="m-5">{viewPerson.bio === 'Add a bio to let other users know more about you' ? 'User hasnt updated bio' : viewPerson.bio}</p>
                        <Button color="warning" className="m-5" onClick={() => {
                        addContact(viewPerson.id)
                    }}>
                        Connect
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}