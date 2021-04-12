import { createContext, useState, useEffect } from "react"
import { auth } from "./firebase"

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(false)
    const [uid, setUid] = useState('')
    const [num, setNum] = useState(0)
    console.log(authUser)
    // console.log(num)

    useEffect(() => {
        const fn = async () => {
            await auth.onAuthStateChanged(user => {
                setAuthUser(user)
                // setUid(user.uid)

            })
        }
        fn()
    }, [])

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider,
}
