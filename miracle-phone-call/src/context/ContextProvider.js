import { useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [search, setSearch] = useState("")
  const [message, setMessage] = useState("")

  const context = {
    username: username,
    setUsername: setUsername,
    password: password,
    setPassword: setPassword,
    search: search,
    setSearch: setSearch,
    message: message,
    setMessage: setMessage
  }

  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}