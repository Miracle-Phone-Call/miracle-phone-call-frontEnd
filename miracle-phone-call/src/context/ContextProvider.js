import { useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){
  const [username, setUsername] = useState("")

  const context = {
    username: username,
    setUsername: setUsername
  }

  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}