import { createContext, useState, useEffect } from "react"
import { auth } from "./firebase"

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setAuthUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}
