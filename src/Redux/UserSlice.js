import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name:"user",
    initialState : null,
    reducers : {
        addUser : (state,action) =>{
            // state.initialState = action.payload
            return action.payload
        },
        removeUser : (state,action) =>{
            // state.initialState = {}
            return null;
        }
    }
})

export const {addUser,removeUser}= UserSlice.actions;
export default UserSlice.reducer;