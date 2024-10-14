import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, register,registerFailure, registerSuccess } from "./auth.actions";

const initalState={
    user:null,
    loading:false,
    error:null
}

export const authReducer=createReducer(
    initalState,
    on(login, (state)=> ({...state, loading:true, error:null})),
    on(loginSuccess, (state,{user})=> ({...state, loading:false, error:null, user})),
    on(loginFailure, (state,{error})=> ({...state, loading:false, error:error})),
 
    on(register, (state)=> ({...state, loading:true, error:null})),
    on(registerSuccess, (state,{user})=> ({...state, loading:false, error:null, user})),
    on(registerFailure, (state,{error})=> ({...state, loading:false, error:error})),

)