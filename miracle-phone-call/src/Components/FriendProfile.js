import { useContext } from "react";
import Context from "../context/Context";
import CustomNavbar from "./Navbar";

export default function FriendProfile () {
    
    const { viewPerson } = useContext(Context)
    return (
        <div>
            <CustomNavbar/>
            <p>{viewPerson.username}</p>
            <p>{viewPerson.first_name} {viewPerson.last_name}</p>
        </div>
    )
}