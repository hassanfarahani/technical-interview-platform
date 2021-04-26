import React, { createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    return (
        <>
            {
                <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
                    { children }
                </AuthContext.Provider>
            }
        </>
    )
}

export default AuthProvider