import { store } from "../index"

export type RootState = ReturnType<typeof store.getState>

export interface UserState{
    nome: string | null,
    theme: string,
    token?: string | null
}

export type AppDispatch = typeof store.dispatch
