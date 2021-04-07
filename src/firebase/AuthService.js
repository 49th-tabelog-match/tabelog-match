import React, { useState, useEffect } from 'react'
import { firebaseConfig } from './config'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')

  useEffect(()=>{
  firebaseConfig.auth().onAuthStateChanged(user => {
    setUser(user)
  })
}, [])

return (
  <AuthContext.Provider value={user}>
    {children}
  </AuthContext.Provider>
)
}

export {
  AuthContext,
  AuthProvider
}
