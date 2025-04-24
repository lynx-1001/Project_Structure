'use client'

import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import UserService from "@/service/UserService"
import { User,UserParam } from "@/types/user"
import { NetworkResponse } from "@/types/Network"
import { RootState } from "../store"


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

export const fetchUsers = createAsyncThunk(
    "User/fetchUsers",
    async (_, {rejectWithValue,getState}) => {
        const state = getState() as RootState;
        // const queryparams: 
        try {
        //    const response = await UserService.getAllUsers<

        } catch (error) {
            
        }
    }
)