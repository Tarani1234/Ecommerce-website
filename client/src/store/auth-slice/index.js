import { createSlice } from "@reduxjs/toolkit";
// first create a intial state 
const initialState = {
    isAuthenticated : false,
    Loading : false,
    user : null
};

//create an authslice
const authslice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        setUser : (state, action) => {
          
        }
    }

})

export const {setUser} = authslice.actions
export default authslice.reducer

