import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

type UserState = {
    id: number,
    role: string,
    jwt: string
}

interface Response {
    exp: number,
    iat: number,
    id: number,
    role: string,
    sub: string
}

const save: CaseReducer<UserState, PayloadAction<string>> = (state, action) => {
    const jwt = action.payload;
    const payload: Response = jwtDecode(jwt);
    state.id = payload.id;
    state.role = payload.role;
    state.jwt = action.payload;
};

const remove: CaseReducer<UserState> = (state) => {
    state.jwt = '';
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        role: "",
        jwt: ""
    } as UserState,
    reducers: {
        save,
        remove
    }
});

export default userSlice;