import { USER_LOGGIN_STATUS } from "./UserActionTypes";

export const updateLoginStatus = loginStatus =>{
    return {
        type: USER_LOGGIN_STATUS,
        status: loginStatus
    }
}