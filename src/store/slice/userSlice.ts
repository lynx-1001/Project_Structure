'use client'

import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import UserService from "@/service/UserService"
import {User } from "@/types/user"
import { NetworkResponse,UserResponse } from "@/types/Network"
import { RootState } from "../store"
import { stat } from "fs"


interface UserState {
    users: User[],
    loading: boolean,
    error: string | null
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}
//Thunk

//fetch All User
export const fetchUsers = createAsyncThunk(
    "User/fetchUsers",
    async (params: Record<string,any>,{ rejectWithValue }) => {
        try {
            const response = await UserService.getAllUsers<NetworkResponse<UserResponse>>(params)
            return response.data

        } catch (error:any) {
            return rejectWithValue(error?.response?.data || error?.message);
        }
    }
)

//Slice

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            console.log('Payload============',action.payload.data)
            state.users = action.payload.data
        })
        .addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false,
            state.error = action.error.message || 'Error fetching users'
        })
    },
})
export const userAction = userSlice.actions;
export type userSliceType = typeof userSlice;
export default userSlice;



