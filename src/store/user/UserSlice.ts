import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState{
    user: object
}

const initialState : UserState | null ={
    user:{
        name: null,
        theme: 'light'
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser({user}, action: PayloadAction<object>){
            user = action.payload 
        }
    }

})

export const { setUser } = userSlice.actions

export default userSlice.reducer