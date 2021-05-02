export const USER_LOGGIN_STATUS = 'USER_LOGGIN_STATUS';
export const USER_DATA_LOADING = 'USER_DATA_LOADING';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAIL = 'USER_DATA_FAIL';

export interface USERDATALOADINGI {
    type: typeof USER_DATA_LOADING
}

export interface USERLOGGINSTATUSI {
    type: typeof USER_LOGGIN_STATUS,
    status:boolean
}

export type UserDispatchTpes = USERDATALOADINGI | USERLOGGINSTATUSI