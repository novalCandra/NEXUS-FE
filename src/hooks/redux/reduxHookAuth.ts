import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import { serviceAuthLogin, serviceAuthRegister } from "../../utils/service/auth.service"
import type { AuthState } from "../../types/typeAuth";

// METHOD POST AUTH
export const fetchingDataAuthLogin = createAsyncThunk("api/login", async (data: object) => {
    const request = await serviceAuthLogin(data);
    const response = await request.json();
    if (!request.ok) {
        return isRejectedWithValue(response)
    }
    return response
})

export const fetcingDataAuthRegister = createAsyncThunk("api/register", async (data: object) => {
    const request = await serviceAuthRegister(data);
    const response = await request.json();
    if (!request.ok) {
        return isRejectedWithValue(response)
    }
    return response
})

const initialState: AuthState = {
    token: null,
    user: null,
    status: "idle",
    error: null
}

export const AuthSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingDataAuthLogin.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchingDataAuthLogin.fulfilled, (state, action) => {
                state.status = 'success'
                state.user = action.payload?.data?.users ?? null
            })
            .addCase(fetchingDataAuthLogin.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
            
            .addCase(fetcingDataAuthRegister.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetcingDataAuthRegister.fulfilled, (state, action) => {
                state.status = 'success'
                state.user = action.payload?.data?.users ?? null
            })
            .addCase(fetcingDataAuthRegister.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })

    }
})

export default AuthSlicer.reducer