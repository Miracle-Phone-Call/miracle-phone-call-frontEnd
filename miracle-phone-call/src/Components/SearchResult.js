import { useContext } from "react"
import Context from "../context/Context"
import { Button } from 'reactstrap'

export default function SearchResult (prop) {

    const {user} = useContext(Context);

    //REMEMBER TO TAKE THIS OUT AND ADD REAL USER CONTEXT
    // let user = {
    //     id : 9,
    //     username : "josemaz"
    // }

    
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
      {prop.array?.map(contact => {
          return (
            <div className="chatbar m-5 p-3">
                <p>{contact.username}</p>
                <p>{contact.first_name} {contact.last_name}</p>
                <Button color="warning" onClick={() => addContact(contact.id)}> Connect +</Button>
            </div>
          )
      })}
    </div>
    )
}