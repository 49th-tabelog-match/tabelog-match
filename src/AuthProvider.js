import { createContext, useState } from "react"

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(false)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         setAuthUser(user)
    //     })
    // }, [])

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