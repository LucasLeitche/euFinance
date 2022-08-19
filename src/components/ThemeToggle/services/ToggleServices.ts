import { themeType } from "../../../repositories/UserServices";

export interface ChangeThemeEmitType{
    changeThemeEmit : (value?: themeType ) => void;
}