export interface UserService{
    nome?: string | null,
    theme?: ThemeType
}

export type ThemeType = string | null