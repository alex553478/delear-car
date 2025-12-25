import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false)
  const [userData, setUserData] = useState(null)

  const loginUser = (user) => {
    setLogged(true)
    setUserData(user)
    localStorage.setItem("userData", JSON.stringify(user))
  }

  const logoutUser = () => {
    setLogged(false)
    setUserData(null)
    localStorage.removeItem("userData")
  }

  useEffect(() => {
    const saved = localStorage.getItem("userData")
    if (saved) {
      setUserData(JSON.parse(saved))
      setLogged(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ logged, userData, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
