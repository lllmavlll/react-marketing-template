import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext()


export const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    setUserName('test from context')
  }, [userName])

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName
      }}
    >
      {children}
    </UserContext.Provider>
  )
}


export const UserAuth = () => {
  return useContext(UserContext)
}

