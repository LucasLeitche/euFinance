import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "../services/StoreServices";

const initialState : UserState = {
        name: null,
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

            const {name, mail, token, theme, pass} = actions.payload;
            
            state.name = name;
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