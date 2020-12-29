import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from "../reducer/cartSlice";
import userSlice from "../reducer/userSlice";

const rootReducer = combineReducers({
    cart:cartSlice.reducer,
    user:userSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;