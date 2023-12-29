import {createSlice} from "@reduxjs/toolkit"


const initialState={
    currentuser:null,
    role:null,
    reload:false
}

export const userSlice=createSlice({
    name:"user1",
    initialState,
    reducers:{
        updateUserUser:(state,action)=>{
            state.currentuser=action.payload
        },
        loginUser:(state,action)=>{
            state.currentuser=action.payload.User
            state.role=action.payload.User.role
            localStorage.setItem("Doppler-Token",action.payload.Token)
        },
        logoutUser:(state)=>{
           state.currentuser=null
           localStorage.removeItem("Doppler-Token")
        },
        reload:(state)=>{
         state.reload=!state.reload
        }
    }
})

export const {loginUser,updateUser,logoutUser,reload}=userSlice.actions
export default userSlice.reducer;