import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../services/StoreServices";

export interface UserState{
    mail: string | null,
    theme: 'light' | 'dark',
    token: string | null,
    pass: string | null
}

const initialState : UserState = {
        mail: null,
        theme: 'light',
        token: null,
        pass: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, actions ) => {

            const {mail, token, theme, pass} = actions.payload
            console.log(mail, token, theme)

            state.mail = mail;
            state.token = token; 
            state.theme = theme; 
            state.pass = pass;
        },
        setLogin: (state, action) =>{
            const {mail, pass} = action.payload
            console.log(mail, pass)
        },
        setTheme: (state, {theme}: any ) =>{
            state.theme = theme
        }
    }

})

export const { setUser, setTheme, setLogin } = userSlice.actions

export default userSlice.reducer