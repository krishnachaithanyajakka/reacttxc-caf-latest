import { UserDispatchTpes,USER_LOGGIN_STATUS } from "../actions/UserActionTypes";

interface UserReducerI {    
    isUserLoggedIn:boolean
}

const userState: UserReducerI={
    isUserLoggedIn:false,
}

const userReducer =(state:UserReducerI=userState,action:UserDispatchTpes):UserReducerI=>{
   switch(action.type){
       case USER_LOGGIN_STATUS:
           return {
           isUserLoggedIn:action.status
       }
       default:
       return state
   }
}

export default userReducer;