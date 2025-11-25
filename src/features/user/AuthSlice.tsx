import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
// Define the types for your state
interface User {
    id: string; 
    firstName: string | null;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

// Define the type for the payload of the setCredential action
interface SetCredentialPayload {
        token: string;
        user: User;
}

// Set the initial state with the defined type
const initialState: AuthState = {
    user: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState, // The type is inferred from here
    reducers: {
        setCredential: (state, action: PayloadAction<SetCredentialPayload>) => {
            console.log("data payload reducer", action.payload);
            const data = action.payload;
            console.log("data", data)
            state.token = data.token;
            state.user = data.user
        },
        logOut: (state) => {
            state.token = null;
            state.user = null;
        }
    }
});

// The selector needs to know the type of the entire state
// We'll create a RootState type in the next step
export const { setCredential, logOut } = authSlice.actions;

// Selector function with proper typing
export const selectCurrentUser = (state: RootState) => state.persistedReducer.auth.user;

export default authSlice.reducer;