import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: "",
    reducers: {
        changeLanguage: (state, action) => {
            return action.payload
        }
        
    }
})

export default languageSlice