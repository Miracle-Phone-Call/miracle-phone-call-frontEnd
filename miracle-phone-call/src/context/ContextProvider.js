import { useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState("")
  const [search, setSearch] = useState("")
  const [message, setMessage] = useState("")
  const [allUsers, setAllUsers] = useState([])
  const [connectedPerson, setConnectedPerson] = useState({});
  const [showChat, setShowChat] = useState(false);
  const [messageList, setMessageList] = useState([])

  const context = {
    user,
    setUser,
    password,
    setPassword,
    search,
    setSearch,
    message,
    setMessage,
    allUsers, 
    setAllUsers,
    connectedPerson,
    setConnectedPerson,
    showChat,
    setShowChat,
    messageList,
    setMessageList
  }

  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}