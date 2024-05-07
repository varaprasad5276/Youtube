import { createSlice } from "@reduxjs/toolkit";
import { LiveChat_COUNT } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
addMessage:(state,action)=>{
    state.messages.splice(LiveChat_COUNT,1)

    //ushift - adding item to the top
    state.messages.unshift(action.payload)
}
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;