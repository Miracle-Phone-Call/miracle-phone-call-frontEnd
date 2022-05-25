import { useState, useEffect } from "react"
import Context from "./Context"

export default function ContextProvider({children}){
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const [allUsers, setAllUsers] = useState([])
  const [viewPerson, setViewPerson] = useState({});

  const context = {
    user,
    setUser,
    search,
    setSearch,
    allUsers, 
    setAllUsers,
    viewPerson, 
    setViewPerson
  }

  useEffect(() => {

  }, []);

  return(
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}