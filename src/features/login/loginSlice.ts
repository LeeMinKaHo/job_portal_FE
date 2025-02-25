import { createSlice } from "@reduxjs/toolkit"


export interface LoginState {
    isLogin : boolean
}

const initialState : LoginState = {
    isLogin:false
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        // login
        // logout
        login : state => {
            state.isLogin = true
        },
        logout:state =>{
            state.isLogin = false
        }
    }
})

export const {login , logout} = loginSlice.actions


export default loginSlice.reducer