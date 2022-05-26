import { useContext } from "react"
import Context from "../context/Context"
import { Button } from 'reactstrap'
import '../Component-Styling/search.css'

export default function SearchResult (prop) {

    const {user, setViewPerson} = useContext(Context);


    
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
        <div className="searchResultBox">
      {prop.array?.map(contact => {
          return (
            <div className="chatbar m-5 p-3">
                <p>
                    {contact.username}
                </p>
                <p>{contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</p>
                <Button style={{backgroundColor: "#514de9"}} onClick={() => {
                    prop.viewProfile(contact.username)
                    setViewPerson(contact)
                }}> View Profile </Button>
            </div>
          )
      })}
    </div>
    )
}