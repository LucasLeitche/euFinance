import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../services/StoreServices";

export interface UserState{
    nome?: string | null,
    theme: 'light' | 'dark',
    token?: string | null
}

const initialState : UserState={
        nome: null,
        theme: 'light',
        token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {nome, token}: any ) => {
            state.nome = nome
            state.token = token
        },
        setTheme: (state, {theme}: any ) =>{
            state.theme = theme
        }
    }

})

export const { setUser, setTheme } = userSlice.actions

export default userSlice.reducer