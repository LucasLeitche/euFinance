import React, { createContext, ReactComponentElement, ReactHTML, useState } from "react";
import { AuthContextServices } from "../repositories/AuthContextServices";

export const AuthContext = createContext({});

const [user, setUser] = useState<AuthContextServices >(
    {
        nome: 'Lucas', 
        token:'nulas', 
        signed: true
    }
)

export function AuthProvider({Children}:any){
    return(
        <AuthContext.Provider value={user}>
            <Children/>
        </AuthContext.Provider>
    )
}