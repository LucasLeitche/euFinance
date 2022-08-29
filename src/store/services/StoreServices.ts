import { store } from "../index"

export type RootState = ReturnType<typeof store.getState>

export interface UserState{
    name: string | null;
    mail: string | null;
    theme: 'light' | 'dark';
    token: string | null;
    pass: string | null;
}

export type AppDispatch = typeof store.dispatch
